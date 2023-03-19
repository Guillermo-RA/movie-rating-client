import { availableLanguages } from '../../components/Header/languages/available-languages'

const languageChanger = (name, code, flag, setDropdown, setFlagCode, i18n) => {
  if (code !== i18n.language) {
    i18n.changeLanguage(code)
        .then(() => {
          localStorage.setItem('language', JSON.stringify({ name, code, flag }))
          setFlagCode(flag)
        })
  }
  setDropdown(false)
}

const getLanguage = () => {
  const storage = localStorage.getItem('language')

  return storage ? JSON.parse(storage) : availableLanguages[0]
}

export { languageChanger, getLanguage }
