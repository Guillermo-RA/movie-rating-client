import {availableLanguages} from "../components/Header/languages/available-languages";
import {useEffect} from "react";

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
            document.querySelector(':not(.languages-container, .languages-button)')
                .addEventListener('click', closeDropdown)
        }
        return () => document.querySelector(':not(.languages-container, .languages-button, .languages-options)').removeEventListener('click', closeDropdown)

    }, [setDropdown, dropdown])
}

export {useGetLanguage, useHandleClickLanguages}