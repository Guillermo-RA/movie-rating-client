import {useEffect} from "react"
import {availableLanguages} from "../../components/Header/languages/available-languages";

const useGetLanguage = () => {
    const storage = localStorage.getItem('language');

    return storage ? JSON.parse(storage) : availableLanguages[0];
}

const useHandleClickLanguages = (setDropdown, dropdown) => {
    useEffect(() => {
        const closeDropdown = (e) => {
            const languagesContainer = document.querySelector('.languages-container')

            if (!languagesContainer.contains(e.target)) {
                setDropdown(false);
            }
        }
        if (dropdown) {
            document.addEventListener('mousedown', closeDropdown)
            document.addEventListener('touchstart', closeDropdown)
        }
        return () => {
            document.removeEventListener('mousedown', closeDropdown)
            document.removeEventListener('touchstart', closeDropdown)
        }

    }, [setDropdown, dropdown])
}

const useHandleClickMenu = ({setHamburgerOpen, hamburgerOpen}) => {
    useEffect(() => {
        const closeMenu = (e) => {
            const navbar = document.querySelector('.navbar')
            const hamburger = document.querySelector('.hamburger-container')
            if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
                setHamburgerOpen(false)
            }
        }
        if (hamburgerOpen) {
            document.addEventListener('mousedown', closeMenu)
            document.addEventListener('touchstart', closeMenu)
        }

        return () => {
            document.removeEventListener('mousedown', closeMenu)
            document.removeEventListener('touchstart', closeMenu)
        }
    }, [setHamburgerOpen, hamburgerOpen])
}

export {useGetLanguage, useHandleClickLanguages, useHandleClickMenu}