let globalFields = {}
const validateForm = (fields) => {
    setFields(fields);
    let errors = false;
    let messages = {};
    for (const key in fields) {
        const {error, message} = validateField({key, ...fields[key]})

        if (error) errors = true

        messages[key] = message
    }
    return {
        errors,
        messages
    }
}

const validateField = ({key: name, value, rules: dataRules, type}) => {
    let error = false
    let message = ''

    if (dataRules) {
        const rules = dataRules.split(',');

        for (const originalRule of rules) {
            const [rule, requirement] = originalRule.split(':')
            error = validationRules[rule]({value, type, requirement})
            if (error) {
                message = getFieldErrorMessage(rule, name, requirement, value)
                break
            }
        }
    }

    return {error, message}
}
const validateRequired = ({value, type}) => {
    let error;
    if (type === 'file') {
        error = value.files.length === 0
    } else {
        error = value.trim() === ''
    }
    return error
}

const validateString = ({value}) => {
    return !/^[a-zA-Z0-9_ ]+$/.test(value);
}
const validateNumber = (value) => {
    return !/^[0-9]+(\.[0-9]+)?$/.test(value)
}
const validateUsername = ({value}) => {
    return !/^[a-zA-Z0-9]+$/.test(value)
}
const validateEmail = ({value}) => {
    return !/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/.test(value)
}

const validateMax = ({value, requirement: max}) => {
    let error
    let parsedMax = parseInt(max)
    if (typeof value === 'number') {
        error = value > parsedMax
    } else {
        error = value.length > parsedMax
    }

    return error
}
const validateMin = ({value, requirement: min}) => {
    let error
    let parsedMin = parseInt(min)
    if (typeof value === 'number') {
        error = value < parsedMin
    } else {
        error = value.length < parsedMin
    }

    return error
}

const validateContains = ({value, requirement: expression}) => {
    let regex = expression;
    if (expression === 'number') {
        regex = /\d/
    } else if (expression === 'mixedcase') {
        regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/
    } else if (expression === 'symbol') {
        regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
    }
    return !regex.test(value)
}

const validateEqualTo = ({value, requirement: field}) => {
    return value !== getValueFromField(field)
}

const setFields = (fields) => {
    globalFields = fields
}

const getFieldErrorMessage = (originalRule, name, requirement, value) => {
    let rule = originalRule
    if (originalRule === 'max' || originalRule === 'min') {
        if (typeof value === 'string') rule += '_string'
        else rule += '_number'
    }
    let message;
    if (requirement)
        message = [rule, requirement]
    else
        message = rule
    return message
}

const getValueFromField = (field) => {
    return globalFields[field].value
}

const validationRules = {
    required: validateRequired,
    string: validateString,
    number: validateNumber,
    email: validateEmail,
    username: validateUsername,
    min: validateMin,
    max: validateMax,
    contains: validateContains,
    equal_to: validateEqualTo,
}

export {validateForm}