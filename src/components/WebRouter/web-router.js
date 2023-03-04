import Header from "../Header/header";
import Home from "../Home/home";
import Register from "../Auth/SignUp/register";
import Login from "../Auth/Login/login";
import RatingGroupsIndex from "../Rate/RatingGroups/rating-groups-index";
import RatingGroupsShow from "../Rate/RatingGroups/rating-groups-show";
import ContentIndex from "../Content/content-index";
import ContentShow from "../Content/content-show";
import Footer from "../Footer/footer";
import {TranslatorProvider} from "../../context/TranslatorProvider";
import {Route, Routes} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ScrollToTop, {useTitle} from "../../hooks/middleware-hooks";

const WebRouter = () => {
    const navbar = useTranslation(['navbar', 'global'])
    const home = useTranslation(['home', 'global'])
    const ratingGroups = useTranslation(['ratingGroups', 'global'])
    const content = useTranslation(['content', 'global'])
    const account = useTranslation(['account', 'errors', 'global'])
    useTitle()

    // const ProtectedRoute = ({children: next}) => {
    //     const {isAuthenticated} = useAuth(true);
    //     if (!isAuthenticated) {
    //         return <Navigate to='/login'/>
    //     }
    //
    //     return next
    // }
    return (
        <>
            <TranslatorProvider.Provider value={navbar}>
                <Header/>
            </TranslatorProvider.Provider>
            <ScrollToTop/>
            <div className='main'>
                <Routes>
                    <Route path='/' element={<Home title='Movie Rating - Home' translator={home}/>}/>
                    <Route path='/login' element={
                        <TranslatorProvider.Provider value={account}>
                            <Login/>
                        </TranslatorProvider.Provider>
                    }/>
                    <Route path='/register' element={
                        <TranslatorProvider.Provider value={account}>
                            <Register/>
                        </TranslatorProvider.Provider>
                    }/>

                    <Route path='/rating-groups' element={
                            <TranslatorProvider.Provider value={ratingGroups}>
                                <RatingGroupsIndex/>
                            </TranslatorProvider.Provider>
                    }/>
                    <Route path='/rating-groups/:id' element={<RatingGroupsShow/>}/>

                    <Route path='/content' element={
                        <TranslatorProvider.Provider value={content}>
                            <ContentIndex/>
                        </TranslatorProvider.Provider>
                    }/>
                    <Route path='/content/:id' element={
                        <TranslatorProvider.Provider value={content}>
                            <ContentShow/>
                        </TranslatorProvider.Provider>
                    }/>
                    <Route path='*' element={<h2 className='title'>404 Not Found</h2>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}
export default WebRouter
