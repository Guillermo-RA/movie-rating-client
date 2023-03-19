import axios from 'axios'
import { validateForm } from './validation-functions'
import { toggleUninteractablePage } from '../body-handler'
import { parseBackendValidationErrors, removeSpecificError } from './form-errors-handlers'
import { createToastifyLoading, updateToastify } from '../toastify/toastify-helpers'
import { getLanguage } from '../language/language-helper'

const handleInput = (e, setForm, form, setErrors, errors) => {
  e.persist()
  if (errors) {
    removeSpecificError(e.target.name, setErrors, errors)
  }
  setForm({
    ...form, [e.target.name]: {
      value: e.target.value,
      rules: e.target.dataset.rules || '',
      type: e.target.type,
    },
  })
}

const handleSubmit = ({ e, fields, action, method, setErrors, __ }) => {
  e.preventDefault()
  const { errors, messages } = validateForm(fields)
  if (!errors) {
    const data = { ...getValuesFromFields(fields), homePage: window.location.origin }
    const language = getLanguage()
    const axiosLang = axios.create({
      headers: {
        'Accept-Language': language.code,
      },
    })
    const toastLoading = createToastifyLoading({
      text: __('request_messages.loading'),
    })

    makeRequest({ data, axiosLang, toastLoading, action, method, setErrors, __ })
  } else {
    setErrors({ errors, messages })
  }
}


const getValuesFromFields = (fields) => {
  return Object.keys(fields).reduce((fieldValues, fieldName) => {
    fieldValues[fieldName] = fields[fieldName].value

    return fieldValues
  }, {})
}

const makeRequest = ({ data, axiosLang, toastLoading, action, method, setErrors, __ }) => {
  toggleUninteractablePage()
  let axiosRequest
  if (method.toLowerCase() !== 'get') {
    axiosRequest = axiosLang[method.toLowerCase()](action, data)
  } else {
    axiosRequest = axiosLang.get(action, { params: { ...data } })
  }

  axiosRequest.then(
      ({ data: { action, email = '' } }) => {
        updateToastify({
          initialToast: toastLoading,
          type: 'success',
          text: __(`request_messages.${action}.success`, { email: email }),
        })
      },
  ).catch(({ response: { data: { errors: messages } } }) => {
    updateToastify({ initialToast: toastLoading, type: 'error', text: __('request_messages.register.error') })
    const parsedMessages = parseBackendValidationErrors(messages)
    setErrors({ errors: true, messages: parsedMessages, backend: true })
  }).finally(() => {
    toggleUninteractablePage()
  })
}


export { handleInput, handleSubmit }
