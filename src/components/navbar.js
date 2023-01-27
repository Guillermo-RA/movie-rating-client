import {Link} from "react-router-dom";

const Navbar = () => {

    return (<header className='header'>
        <div className='app-name'>
            <Link className='page-link' to='/'><h1>Movie Rating</h1></Link>
        </div>
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li><Link className='page-link' to='/'>Home</Link></li>
                <li><Link className='page-link' to='/rating-groups'>Rating Groups</Link></li>
            </ul>
        </nav>
    </header>)
}

export default Navbar