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

export {handleErrors, removeSpecificError, parseBackendValidationErrors}