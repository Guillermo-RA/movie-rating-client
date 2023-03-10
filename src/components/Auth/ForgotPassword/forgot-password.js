import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";
import Form from "../Form/form";
import {forgotPasswordFields} from "../../../constants/forms/auth/form-fields";

const ForgotPassword = () => {
    const {t: __} = useContext(TranslatorProvider)
    const links = [
        {
            linkText: 'links.have_account',
            href: '/login',
            linkColor: 'orange'
        },
        {
            linkText: 'links.dont_have_account',
            href: '/register',
            linkColor: 'blue'
        }
    ]
    return (
        <div className='auth-form-container'>
            <span className='h2 title orange'>{__('forgot_password.title')}</span>
            <Form method='GET' button={{buttonText:'forgot_password', buttonColor: 'orange'}} links={links} action='/forgot-password' fields={forgotPasswordFields} __={__} />
        </div>
    )
}

export default ForgotPassword