import {Link} from "react-router-dom";

const NavbarLinkItem = ({item: {name, url, className}}) => {

    return <li className='navbar-item'><Link className={`link ${className || 'link-white'}`} to={url}>{name}</Link></li>
}

export default NavbarLinkItem