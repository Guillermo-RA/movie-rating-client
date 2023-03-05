import axios from "axios";
import {validateForm} from "./validation-functions";
import {toast, ToastContainer} from "react-toastify";

const handleInput = (e, setForm, form, setErrors, errors) => {
    e.persist()
    if (errors) {
        removeSpecificError(e.target.name, setErrors, errors)
    }
    setForm({
        ...form, [e.target.name]: {
            value: e.target.value,
            rules: e.target.dataset.rules || '',
            type: e.target.type
        }
    });
}

const handleSubmit = (e, fields, action, setErrors) => {
    e.preventDefault()
    const {errors, messages} = validateForm(fields)
    if (errors) {
        const data = getValuesFromFields(fields)
        //TODO Mejorar el paso de idioma al back por axios
        const axiosLanguage = axios.create({
            headers: {
                'Accept-Language': 'es'
            }
        });

        axiosLanguage.post(action, data).then(
            ({data}) => {
                console.log(data)
                toast.success('Success')
            }
        )
            .catch(({response: {data: {errors: messages}}}) => {
                console.log('aqui')
                toast.error('Error', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                <ToastContainer/>
                const parsedMessages = parseBackendValidationErrors(messages)
                setErrors({errors: true, messages: parsedMessages, backend: true})
                alertErrors(errors)
            })
    } else {
        alertErrors(messages)
        setErrors({errors, messages})
    }
}
const handleErrors = ({errors, messages, backend}, __, fields) => {
    for (const inputName in messages) {
        const input = document.querySelector(`#${inputName}-input`)
        const errorContainer = document.querySelector(`#${inputName}-error`)

        if (messages[inputName]) {
            if (backend) {
                setErrorBackend(input, errorContainer, messages[inputName])
            } else {
                const errorMessage = createErrorMessage(messages, inputName, fields, __)
                setError(input, errorContainer, errorMessage)
            }
        } else {
            removeErrors(input, errorContainer)
        }
    }
}

const alertErrors = (errors) => {
    // TODO Implementar librería de alertas (preguntar a Dani si no lo tengo en marcadores) y añadir los errores
    for (const error of Object.keys(errors)) {
        console.log(error)
    }
}

const getValuesFromFields = (fields) => {

    return Object.keys(fields).reduce((fieldValues, fieldName) => {
        fieldValues[fieldName] = fields[fieldName].value;

        return fieldValues;
    }, {});
}

const removeSpecificError = (name, setErrors, {errors, messages, backend}) => {
    document.querySelector(`.error[data-input=${name}]`).classList.add('hide')
    setErrors({errors, messages: {...messages, [name]: ''}, backend})
}

const createErrorMessage = (messages, inputName, fields, __) => {
    let errorMessage
    if (Array.isArray(messages[inputName])) {
        const [message, requirement] = messages[inputName]
        const requirementMessage = getRequirementMessage(requirement, fields, __)

        errorMessage = __(`messages.${message}`, {
            ns: 'errors',
            'field': __(`input.${inputName}`, {ns: 'account'}),
            'requirement': requirementMessage
        })
    } else {
        errorMessage = __(`messages.${messages[inputName]}`, {
            ns: 'errors',
            'field': __(`input.${inputName}`, {ns: 'account'})
        })
    }

    return errorMessage
}

const getRequirementMessage = (requirement, fields, __) => {
    let requirementMessage = requirement
    if (!/\d/.test(requirement)) {
        if (fields.includes(requirement)) {
            requirementMessage = __(`input.${requirement}`, {ns: 'account'})
        } else {
            requirementMessage = __(`requirements.${requirement}`, {ns: 'errors'})
        }
    }
    return requirementMessage
}

const setError = (input, errorContainer, errorMessage) => {
    errorContainer.textContent = errorMessage;

    input.setAttribute('aria-invalid', 'true')
    input.setAttribute('aria-describedby', errorContainer.id)
    input.classList.add('invalid');
    errorContainer.classList.remove('hide')
}
const setErrorBackend = (input, errorContainer, errorMessage) => {
    errorContainer.textContent = errorMessage;

    input.setAttribute('aria-invalid', 'true')
    input.setAttribute('aria-describedby', errorContainer.id)
    input.classList.add('invalid');
    errorContainer.classList.remove('hide')
}

const removeErrors = (input, errorContainer) => {

    input.setAttribute('aria-invalid', 'false')
    input.setAttribute('aria-describedby', '')
    input.classList.remove('invalid');
    errorContainer.classList.add('hide')
}

const parseBackendValidationErrors = (messages) => {
    return Object.entries(messages).reduce((parsedMessage, [inputName, errors]) => {
        parsedMessage[inputName] = errors[0]
        return parsedMessage
    }, {})
}

export {handleInput, handleSubmit, handleErrors}