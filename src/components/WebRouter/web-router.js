import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/home";
import RatingGroupsIndex from "../../pages/Rate/RatingGroups/rating-groups-index";
import RatingGroupsShow from "../../pages/Rate/RatingGroups/rating-groups-show";
import MoviesIndex from "../../pages/Movies/movies-index";
import MoviesShow from "../../pages/Movies/movies-show";

const WebRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rating-groups' element={
                <RatingGroupsIndex />
            }/>
            <Route path='/rating-groups/:id' element={<RatingGroupsShow/>}/>
            <Route path='/movies' element={<MoviesIndex/>}/>
            <Route path='/movies/:id' element={<MoviesShow/>}/>
            <Route path='*' element={<h2 className='title'>404 Not Found</h2>}/>
        </Routes>
    )
}
export default WebRouter
