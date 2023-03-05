import {useContext, useEffect, useMemo} from "react";
import {useSetFormValues, useSetErrors} from "../../../hooks/forms/form-hooks";
import {handleErrors, handleInput, handleSubmit} from "../../../helpers/forms/form-handlers";
import {ApiDataProvider} from "../../../context/ApiDataProvider";
import {Link} from "react-router-dom";

const Form = ({fields, __, action, button: {buttonText, buttonColor}, link: {href, linkColor, linkText}, children, ...props}) => {
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
                            <small id={`${name}-error`} className='error hide' data-input={name}></small>
                        </div>
                    ))}
                    {children}
                </div>
                <div className='submit-button-container text-center mt-2'>
                    <button className={`button button-${buttonColor}`} style={{alignSelf: 'center'}} type='submit'
                            name='register'>{__(`${buttonText}.button`)}
                    </button>
                </div>
                {href ? <Link className={`link link-${linkColor} pt-1 fw-600`} to={href}>{__(linkText)}</Link> : ''}
            </div>
        </form>
    )
}

export default Form