const languageChanger = (name, code, flag, setDropdown, setFlagCode, i18n) => {
    if (code !== i18n.language)
        i18n.changeLanguage(code)
            .then(() => {
                localStorage.setItem('language', JSON.stringify({name, code, flag}))
                setFlagCode(flag)
            });
    setDropdown(prev => !prev)

}

export {languageChanger}