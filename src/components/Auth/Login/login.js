import Form from "../Form/form";
import {loginFields} from "../../../constants/forms/auth/form-fields";
import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";

import "../../../assets/scss/components/auth/form.scss"

const Login = () => {
    const {t: __} = useContext(TranslatorProvider)

    return (
        <div className='auth-form-container'>
            <span className='h2 title orange'>{__('login.title')}</span>
            <Form method='POST' button={{buttonText:'login', buttonColor: 'orange'}} link={{linkText: 'links.dont_have_account', href: '/register', linkColor: 'blue'}} action='/login' fields={loginFields} __={__} />
        </div>
    )
}

export default Login