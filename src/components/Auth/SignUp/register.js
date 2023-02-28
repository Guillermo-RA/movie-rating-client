import Form from "../Form/form";
import {registerFields} from "../../../constants/forms/auth/form-fields";
import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";
import {Link} from "react-router-dom";

import "../../../assets/scss/components/auth/form.scss"

const Register = () => {
    const {t: __} = useContext(TranslatorProvider)

    return (
        <>
            <span className='h2 title'>{__('register.title')}</span>
            <Form method='POST' title='register' action='/register' fields={registerFields} color='yellow' __={__}>
                <Link className='link link-blue pt-1 fw-600' to='/login'>{__('links.have_account')}</Link>
            </Form>
        </>
    )
}

export default Register