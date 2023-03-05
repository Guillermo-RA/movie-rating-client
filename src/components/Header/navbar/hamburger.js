import {Menu} from "feather-icons-react";
import {useHandleMenuClick} from "../../../hooks/navbar/navbar-hooks";

const Hamburger = ({hamburger: {setHamburgerOpen, hamburgerOpen}}) => {
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    useHandleMenuClick({setHamburgerOpen, hamburgerOpen})
    return (
        <div className='hamburger-menu-container'>
            <button onClick={toggleHamburger} className='hamburger-button button p-0' type='button'
                    aria-expanded={hamburgerOpen ? 'true' : 'false'}>
                <Menu className='light-orange p-0'/></button>
        </div>
    )
}

export default Hamburger