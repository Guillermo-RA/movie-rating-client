import {useHandleClickMenu} from "../../../hooks/navbar/navbar-hooks";

const Hamburger = ({hamburger: {setHamburgerOpen, hamburgerOpen}}) => {
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    useHandleClickMenu({setHamburgerOpen, hamburgerOpen})
    return (
        <div aria-expanded={hamburgerOpen ? 'true' : 'false'} role='button' onClick={toggleHamburger}  className={`hamburger-container${hamburgerOpen ? ' open' : ''}`}>
            <div className='hamburger'></div>
        </div>
    )
}

export default Hamburger