import '../../../assets/scss/general/navbar.scss'
import LanguageSelector from "../languages/language-selector";
import {navbarLinks} from "./navbar-links";
import NavbarLinkItem from "./navbar-link-item";

const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                {navbarLinks.map((item, index) => (
                    <NavbarLinkItem key={index} item={item}/>
                ))}
                <li className='navbar-item language-navbar'><LanguageSelector/></li>
            </ul>
        </nav>
    )
}

export default Navbar