import LanguageSelector from "../languages/language-selector";
import {navbarLinks} from "./navbar-links";
import NavbarLinkItem from "./navbar-link-item";
import {useState} from "react";
import { Menu } from 'feather-icons-react'

import '../../../assets/scss/general/navbar.scss'
const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <>
            <div className='hamburger-menu-container'>
                <button onClick={toggleHamburger} className='hamburger-button button' type='button'><Menu className='light-orange p-0'/></button>
            </div>
            <nav className={`navbar${hamburgerOpen ? '' : ' open'}`}>
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