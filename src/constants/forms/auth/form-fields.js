// TODO mirar bien autocomplete
const registerFields =
    [
        {
            type: 'text',
            name: 'name',
            className: 'input-text',
            id: 'name-input',
            placeholder: 'name',
            "data-rules": [
                'required',
                'string',
                'max:50',
            ]
        },
        {
            type: 'text',
            name: 'username',
            className: 'input-text',
            id: 'username-input',
            placeholder: 'username',
            autoComplete: 'username',
            "data-rules": [
                'required',
                'string',
                'max:30'
            ]
        },
        {
            type: 'text',
            name: 'email',
            className: 'input-text',
            id: 'email-input',
            placeholder: 'email',
            "data-rules": [
                'required',
                'email'
            ]
        },
        {
            type: 'text',
            name: 'phone',
            className: 'input-text',
            id: 'phone-input',
            placeholder: 'phone',
            autoComplete: 'phone',
            "data-rules": [
                'required',
                'string'
            ]
        },
        {
            type: 'password',
            name: 'password',
            className: 'input-text',
            id: 'password-input',
            placeholder: 'password',
            autoComplete: 'current-password',
            "data-rules": [
                'required',
                'min:8',
                'contains:number',
                'contains:mixedcase',
                'contains:symbol'
            ]
        },
        {
            type: 'password',
            name: 'confirm_password',
            className: 'input-text',
            id: 'confirm_password-input',
            placeholder: 'confirm_password',
            autoComplete: 'none',
            "data-rules": [
                'equal_to:password'
            ]
        },
    ]
const loginFields =
    [
        {
            type: 'text',
            name: 'username',
            className: 'input-text',
            id: 'username-input',
            placeholder: 'username',
            autoComplete: 'username',
            "data-rules": [
                'required'
            ]
        },
        {
            type: 'password',
            name: 'password',
            className: 'input-text',
            id: 'password-input',
            placeholder: 'password',
            autoComplete: 'current-password',
            "data-rules": [
                'required'
            ]
        },
    ]
export {registerFields, loginFields}