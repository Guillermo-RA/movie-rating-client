import ScrollToTop from "../../helpers/scroll-to-top";
import Header from "../Header/header";
import Home from "../../pages/Home/home";
import RatingGroupsIndex from "../../pages/Rate/RatingGroups/rating-groups-index";
import RatingGroupsShow from "../../pages/Rate/RatingGroups/rating-groups-show";
import MoviesIndex from "../../pages/Movies/movies-index";
import ContentShow from "../../pages/Movies/content-show";
import Footer from "../Footer/footer";
import {TranslatorProvider} from "../../context/TranslatorProvider";
import {Route, Routes} from "react-router-dom";
import {useTranslation} from "react-i18next";

const WebRouter = () => {
    const navbar = useTranslation('navbar')
    const home = useTranslation('home')

    return (
        <>
            <TranslatorProvider.Provider value={navbar}>
                <Header/>
            </TranslatorProvider.Provider>
            <ScrollToTop/>
            <div className='main'>
                <Routes>
                    <Route path='/' element={
                        <TranslatorProvider.Provider value={home}>
                            <Home/>
                        </TranslatorProvider.Provider>
                    }/>
                    <Route path='/rating-groups' element={<RatingGroupsIndex/>}/>
                    <Route path='/rating-groups/:id' element={<RatingGroupsShow/>}/>
                    <Route path='/content' element={<MoviesIndex/>}/>
                    <Route path='/content/:id' element={<ContentShow/>}/>
                    <Route path='*' element={<h2 className='title'>404 Not Found</h2>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}
export default WebRouter
