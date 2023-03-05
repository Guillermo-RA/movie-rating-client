import {useEffect} from "react"
import {availableLanguages} from "../../components/Header/languages/available-languages";

const useGetLanguage = () => {
    const storage = localStorage.getItem('language');

    return storage ? JSON.parse(storage) : availableLanguages[0];
}

const useHandleClickLanguages = (setDropdown, dropdown) => {
    useEffect(() => {
        const closeDropdown = (e) => {
            const target = e.target.classList;

            if (!target.contains('languages-options') && !target.contains('list-no-decoration'))
                setDropdown(false);
        }
        if (dropdown) {
            document.querySelector(':not(.languages-container):not(.languages-button)')
                .addEventListener('click', closeDropdown)
        }
        return () => document.querySelector(':not(.languages-container, .languages-button, .languages-options)').removeEventListener('click', closeDropdown)

    }, [setDropdown, dropdown])
}

const useHandleMenuClick = ({setHamburgerOpen, hamburgerOpen}) => {
    useEffect(() => {
        const closeMenu = (e) => {
            const targetClass = e.target.classList
            if ((e.target.nodeName !== 'svg' && e.target.nodeName !== 'line' && !targetClass.contains('navbar') && !targetClass.contains('navbar-items') ))
                setHamburgerOpen(false)
        }
        if (hamburgerOpen) {
            document.querySelectorAll(':not(.hamburger-button):not(.navbar):not(.navbar-items)').forEach(element => {
                element.addEventListener('click', closeMenu)
            })
        }

        return () => document.querySelector(':not(.hamburger-button):not(.navbar):not(.navbar-items)').removeEventListener('click', closeMenu)
    }, [setHamburgerOpen, hamburgerOpen])
}

export {useGetLanguage, useHandleClickLanguages, useHandleMenuClick}