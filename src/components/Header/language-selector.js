import Flag from "react-world-flags";
import {useState} from "react";

// TODO Crear la lista de idiomas y crear estilos del dropdown. Hacer el hook para cambiar de idioma y tener pre seleccionado el del localStorage
const LanguageSelector = () => {

    const [dropdown, setDropdown] = useState(false);

    return (<button className='languages-container' aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown(prev => !prev)}>
        <Flag code='es' height={'12rem'} />
    </button> )
}

export default LanguageSelector