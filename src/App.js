import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import RatingGroupsIndex from "./pages/Rate/RatingGroups/rating-groups-index";
import RatingGroupsShow from "./pages/Rate/RatingGroups/rating-groups-show";
import MoviesIndex from "./pages/Movies/movies-index";
import Footer from "./components/Footer/footer";

const App = () => {
    return (
            <div className='app-container'>
                <Header/>
                <div className='main'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/rating-groups' element={
                            <RatingGroupsIndex />
                        }/>
                        <Route path='/rating-groups/:id' element={<RatingGroupsShow/>}/>
                        <Route path='/movies' element={<MoviesIndex/>}/>
                        <Route path='*' element={<h2 className='title'>404 Not Found</h2>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
    )
}

export default App;
