import axios from "axios";

const languageChanger = (name, code, flag, setDropdown, setFlagCode, i18n) => {
    if (code !== i18n.language)
        i18n.changeLanguage(code)
            .then(() => {
                localStorage.setItem('language', JSON.stringify({name, code, flag}))
                setFlagCode(flag)
                axios(`${process.env.REACT_APP_REST_API_URL}/change-language/${code}`)
            });
    setDropdown(prev => !prev)
// TODO Realizar una llamada al back para cambiar el idioma
}

export {languageChanger}