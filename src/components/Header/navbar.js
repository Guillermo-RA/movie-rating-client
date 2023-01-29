import {Link} from "react-router-dom";

import '../../assets/scss/general/navbar.scss'
const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                <li className='navbar-item'><Link className='link link-white' to='/'>Home</Link></li>
                <li className='navbar-item'><Link className='link link-white' to='/rating-groups'>Rating Groups</Link></li>
                <li className='navbar-item'><Link className='link link-white' to='/movies'>Movies</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar