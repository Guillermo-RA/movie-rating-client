import KnowAbout from "./know-about";
import JoinNowTrendingContainer from "./join-now-trending/join-now-trending-container";

import '../../assets/scss/components/home/home.scss'

const Home = () => {

    return (
            <div className='home-container'>
                <KnowAbout/>
                <hr className='solid black'/>
                <JoinNowTrendingContainer/>
            </div>
    )
}

export default Home;