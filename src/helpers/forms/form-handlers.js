import axios from "axios";
import {validateForm} from "./validation-functions";

const handleInput = (e, setForm, form, setErrors, errors) => {
    e.persist()
    removeSpecificError(e.target.name, setErrors, errors)
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
    setErrors({errors, messages})
    if (errors) {
    } else {
    }
    const data = getValuesFromFields(fields)
    console.log(data)
    axios.post(action, data).then(
        ({data}) => console.log(data)
    )
        .catch(({response: {data: {errors}}}) => {
            alertErrors(errors)
        })
}
const handleErrors = ({messages}, __, fields) => {

    for (const inputName in messages) {
        const input = document.querySelector(`#${inputName}-input`)
        const errorContainer = document.querySelector(`#${inputName}-error`)

        if (messages[inputName]) {
            const errorMessage = createErrorMessage(messages, inputName, fields, __)

            setError(input, errorContainer, errorMessage)
        } else {
            removeErrors(input, errorContainer)
        }
    }
}

const alertErrors = (errors) => {
    // TODO Implementar librería de alertas (preguntar a Dani si no lo tengo en marcadores) y añadir los errores
    for (const error of Object.keys(errors)) {
        console.error(errors[error][0])
    }
}

const getValuesFromFields = (fields) => {

    return Object.keys(fields).reduce((fieldValues, fieldName) => {
        fieldValues[fieldName] = fields[fieldName].value;

        return fieldValues;
    }, {});
}

const removeSpecificError = (name, setErrors, {errors, messages}) => {
    document.querySelector(`.error[data-input=${name}]`).classList.add('hide')
    setErrors({errors, messages: {...messages, [name]: ''}})
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

const removeErrors = (input, errorContainer) => {

    input.setAttribute('aria-invalid', 'false')
    input.setAttribute('aria-describedby', '')
    input.classList.remove('invalid');
    errorContainer.classList.add('hide')
}

export {handleInput, handleSubmit, handleErrors}