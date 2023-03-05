import LanguageSelector from "../languages/language-selector";
import Hamburger from "./hamburger";
import NavbarLinkItem from "./navbar-link-item";
import {navbarLinks} from "./navbar-links";
import {useState} from "react";

import '../../../assets/scss/general/navbar.scss'
const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    return (
        <>
            <Hamburger hamburger={{setHamburgerOpen, hamburgerOpen}} />
            <nav className={`navbar${hamburgerOpen ? ' open' : ''}`}>
                <ul className='navbar-items'>
                    {navbarLinks.map((item, index) => (
                        <NavbarLinkItem key={index} item={item}/>
                    ))}
                    <li className='navbar-item language-navbar'><LanguageSelector/></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar