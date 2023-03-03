import Form from "../Form/form";
import {loginFields} from "../../../constants/forms/auth/form-fields";
import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";

import "../../../assets/scss/components/auth/form.scss"

const Login = () => {
    const {t: __} = useContext(TranslatorProvider)

    return (
        <div className='auth-form-container'>
            <span className='h2 title'>{__('login.title')}</span>
            <Form method='POST' button={{buttonText:'login', buttonColor: 'blue'}} link={{linkText: 'links.dont_have_account', href: '/register', linkColor: 'orange'}} action='/login' fields={loginFields} __={__} />
        </div>
    )
}

export default Login