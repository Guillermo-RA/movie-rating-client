import KnowAbout from "./know-about";
import JoinNowTrendingContainer from "./join-now-trending/join-now-trending-container";
import {useTranslation} from "react-i18next";
import '../../assets/scss/pages/home/home.scss'

const Home = () => {
    const {i18n} = useTranslation("global");
    return (
        <div className='home-container'>
            <button onClick={() => {
                i18n.changeLanguage('es')
                    .then(() => {
                        localStorage.setItem('language', 'es');
                    })
            }
            }>ES
            </button>
            <button onClick={() => {
                i18n.changeLanguage('en')
                    .then(() => {
                        localStorage.setItem('language', 'en');
                    })
            }}>EN
            </button>
            <KnowAbout/>
            <hr className='solid black'/>
            <JoinNowTrendingContainer/>
        </div>
    )
}

export default Home;