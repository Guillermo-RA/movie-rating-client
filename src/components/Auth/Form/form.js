import {useContext, useEffect, useMemo} from "react";
import {useSetFormValues, useSetErrors} from "../../../hooks/form-hooks";
import {handleErrors, handleInput, handleSubmit} from "../../../helpers/forms/form-handlers";
import {ApiDataProvider} from "../../../context/ApiDataProvider";

const Form = ({fields, __, title, action, color, children, ...props}) => {
    const {restApiUrl} = useContext(ApiDataProvider);
    const url = restApiUrl + action;

    const fieldsMemo = useMemo(() => {
        const fieldsInit = {}
        fields.forEach(({name, value, "data-rules": rules, type}) => {
            fieldsInit[name] = {
                value: value || '',
                rules: rules?.join(',') || '',
                type
            };
        })
        return fieldsInit
    }, [fields])

    const {form, setForm} = useSetFormValues({...fieldsMemo})
    const {errors, setErrors} = useSetErrors({})


    useEffect(() => {
        const fieldNames = Object.keys(fieldsMemo)
        handleErrors(errors, __, fieldNames)
    }, [errors, __, fieldsMemo])

    return (
        <form action={action} {...props} onSubmit={e => handleSubmit(e, form, url, setErrors)}>
            <div className='form-container mt-2'>
                <div className='form-inputs-container'>
                    {fields.map(({placeholder, name, ...field}, index) => (
                        <div key={index} className='input-container'>
                            <input name={name}
                                   onChange={e => handleInput(e, setForm, form, setErrors, errors)}
                                   placeholder={__(`placeholder.${placeholder}`)} {...field} />
                            <small id={`${name}-error`} className='error hide' data-input={name}>The field email is
                                required</small>
                        </div>
                    ))}
                </div>
                <div className='button-container text-center mt-2'>
                    <button className={`button button-${color}`} style={{alignSelf: 'center'}} type='submit'
                            name='register'>{__(`${title}.button`)}
                    </button>
                </div>
                {children}
            </div>
        </form>
    )
}

export default Form