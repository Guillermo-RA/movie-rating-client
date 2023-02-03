import {Link} from "react-router-dom";
import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";

const NavbarLinkItem = ({item: {name, url, className}}) => {
    const {t: __} = useContext(TranslatorProvider);

    return <li className='navbar-item'><Link className={`link ${className || 'link-white'}`} to={url}>{__(`items.${name}`)}</Link></li>
}

export default NavbarLinkItem