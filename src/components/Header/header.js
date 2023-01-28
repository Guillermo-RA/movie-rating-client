import {Link} from "react-router-dom";
import Navbar from "./navbar";

const Header = () => {

    return (
        <header className='header bg-dark-blue white'>
            <div className='app-name'>
                <Link className='page-link link-light-orange' to='/'><h1>Movie Rating</h1></Link>
            </div>
            <Navbar />
        </header>
    )
}

export default Header