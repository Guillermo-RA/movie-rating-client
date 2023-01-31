import '../../../assets/scss/general/navbar.scss'
import LanguageSelector from "../language-selector";
import { navbarLinks } from "./navbar-links";
import NavbarLinkItem from "./navbar-link-item";
const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                <LanguageSelector />
                {navbarLinks.map((item, index) => {
                    return <NavbarLinkItem key={index} item={item}/>
                })}
            </ul>
        </nav>
    )
}

export default Navbar