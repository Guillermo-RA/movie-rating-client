import Form from "../Form/form";
import {loginFields} from "../../../constants/forms/auth/form-fields";
import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";
import {Link} from "react-router-dom";

import "../../../assets/scss/components/auth/form.scss"

const Login = () => {
    const {t: __} = useContext(TranslatorProvider)

    return (
        <>
            <span className='h2 title'>{__('login.title')}</span>
            <Form method='POST' title='login' action='/login' fields={loginFields} color='blue' __={__}>
                <Link className='link link-orange pt-1 fw-600' to='/register'>{__('links.dont_have_account')}</Link>
            </Form>
        </>
    )
}

export default Login