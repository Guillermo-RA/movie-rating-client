import Flag from 'react-world-flags'
import LanguageItem from './language-item'
import { useState } from 'react'
import { availableLanguages } from './available-languages'
import { useGetLanguage, useHandleClickLanguages } from '../../../hooks/navbar/navbar-hooks'
const LanguageSelector = ({ setHamburgerOpen }) => {
  const [dropdown, setDropdown] = useState(false)
  const { flag } = useGetLanguage()
  const [flagCode, setFlagCode] = useState(flag)

  useHandleClickLanguages(setDropdown, dropdown)

  return (
    <div className='languages-container'>
      <button className='languages-button button' aria-haspopup='menu' aria-expanded={dropdown ? 'true' : 'false'}
        onClick={(e) => {
          e.stopPropagation()
          setDropdown((prev) => !prev)
        }}>
        <Flag code={flagCode} width='18rem'/>
      </button>
      <div className={`languages-options ${dropdown ? 'show' : 'hide'}`}>
        <ul className='list-no-decoration'>
          {availableLanguages.map((language, index) => (
            <LanguageItem key={index} language={language} setFlagCode={setFlagCode} setDropdown={setDropdown} setHamburgerOpen={setHamburgerOpen}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LanguageSelector
