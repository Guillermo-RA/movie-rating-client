import Flag from "react-world-flags";
import {useTranslation} from "react-i18next";
import {languageChanger} from "../../../helpers/language-changer";

const LanguageItem = ({language: {name, code, flag}, setDropdown, setFlagCode}) => {

    const {i18n} = useTranslation()


    return (
        <li data-code={code} className='language-item' onClick={() => languageChanger(name, code, flag, setDropdown, setFlagCode, i18n)}>
            <Flag code={flag} width='18rem'/>{name}
        </li>
    )

}

export default LanguageItem