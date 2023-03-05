import Flag from "react-world-flags";
import {useTranslation} from "react-i18next";
import {languageChanger} from "../../../helpers/language/language-helper";

const LanguageItem = ({language: {name, code, flag}, setDropdown, setFlagCode, setHamburgerOpen}) => {

    const {i18n} = useTranslation()


    return (
        <li data-code={code} className='language-item' onClick={() => {
            languageChanger(name, code, flag, setDropdown, setFlagCode, i18n)
            setHamburgerOpen(false)
        }}>
            <Flag code={flag} width='18rem'/>{name}
        </li>
    )

}

export default LanguageItem