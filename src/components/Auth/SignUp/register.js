import Form from "../Form/form";
import {registerFields} from "../../../constants/forms/auth/form-fields";
import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";

import "../../../assets/scss/components/auth/form.scss"

const Register = () => {
    const {t: __} = useContext(TranslatorProvider)

    return (
        <div className='auth-form-container'>
            <span className='h2 title blue'>{__('register.title')}</span>
            <Form method='POST' button={{buttonText:'register', buttonColor: 'blue'}} link={{linkText: 'links.have_account', href: '/login', linkColor: 'orange'}} action='/register' fields={registerFields} __={__}/>
        </div>
    )
}

export default Register