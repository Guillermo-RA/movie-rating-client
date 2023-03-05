import axios from "axios";
import {validateForm} from "./validation-functions";
import {toggleUninteractablePage} from "../body-handler";
import {parseBackendValidationErrors, removeSpecificError} from "./form-errors-handlers";
import {createToastifyLoading, updateToastify} from "../toastify/toastify-helpers";
import {getLanguage} from "../language/language-helper";

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

const handleSubmit = (e, fields, action, setErrors, __) => {
    // TODO Añadir los errores de servidor para que salga un mensaje también
    e.preventDefault()
    const {errors, messages} = validateForm(fields)

    if (errors) {
        const data = getValuesFromFields(fields)
        const language = getLanguage()
        const axiosLang = axios.create({
            headers: {
                'Accept-Language': language.code
            }
        });
        const toastLoading = createToastifyLoading({
            text: __('requestMessages.loading')
        })
        toggleUninteractablePage()
        axiosLang.post(action, data).then(
            ({data}) => {
                console.log(data)
                updateToastify({
                    initialToast: toastLoading,
                    type: 'success',
                    text: __('requestMessages.register.success', {})
                })
            }
        ).catch(({response: {data: {errors: messages}}}) => {
            updateToastify({initialToast: toastLoading, type: 'error', text: __('requestMessages.register.error')})
            const parsedMessages = parseBackendValidationErrors(messages)
            setErrors({errors: true, messages: parsedMessages, backend: true})

        }).finally(() => {
            toggleUninteractablePage()
        })
    } else {
        setErrors({errors, messages})
    }
}


const getValuesFromFields = (fields) => {

    return Object.keys(fields).reduce((fieldValues, fieldName) => {
        fieldValues[fieldName] = fields[fieldName].value;

        return fieldValues;
    }, {});
}


export {handleInput, handleSubmit}