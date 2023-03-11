import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";
import Form from "../Form/form";
import {resetPasswordFields} from "../../../constants/forms/auth/form-fields";
import {useParams} from "react-router-dom";

const ResetPassword = () => {

    const {t: __} = useContext(TranslatorProvider)
    const {token, email} = useParams()
    const links = [
        {
            linkText: 'links.home',
            href: '/',
            linkColor: 'orange'
        }
    ]
    return (
        <div className='auth-form-container'>
            <span className='h2 title blue'>{__('reset_password.title')}</span>
            <Form method='POST' button={{buttonText:'reset_password', buttonColor: 'blue'}} links={links} action='/reset-password' fields={resetPasswordFields} __={__}>
                <input type="hidden" name="token" value={token} />
                <input type="hidden" name="email" value={email} />
            </Form>
        </div>
    )
}

export default ResetPassword