import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
import RatingGroupsIndex from "./pages/Rate/RatingGroups/rating-groups-index";
import RatingGroupShow from "./pages/Rate/RatingGroups/rating-group-show";
import Navbar from "./components/navbar";

const App = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <div className='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/rating-groups' element={<RatingGroupsIndex />} />
                    <Route path='/rating-groups/:id' element={<RatingGroupShow />} />
                    <Route path='*' element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
