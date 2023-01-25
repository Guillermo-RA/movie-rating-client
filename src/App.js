import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
import RatingGroups from "./pages/Rate/RatingGroups/rating-groups";

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
                <Route path='/rating-groups' element={<RatingGroups />} />
            </Routes>
        </>
    )
}

export default App;
