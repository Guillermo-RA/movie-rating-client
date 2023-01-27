import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
import RatingGroupsIndex from "./pages/Rate/RatingGroups/rating-groups-index";
import RatingGroupShow from "./pages/Rate/RatingGroups/rating-group-show";

const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/rating-groups'}>Rating Groups</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rating-groups' element={<RatingGroupsIndex />} />
                <Route path='/rating-groups/:id' element={<RatingGroupShow />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )
}

export default App;
