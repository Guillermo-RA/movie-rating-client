import TrendingMovies from "./trending-movies";
import JoinNow from "./join-now";

const JoinNowTrendingContainer = () => {
    return (
        <div className='join-trending-container'>
            <div className='join-now'>
                <JoinNow/>
            </div>
            <div className='trending-movies'>
                <TrendingMovies/>
            </div>
        </div>
    )
}

export default JoinNowTrendingContainer