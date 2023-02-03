import TrendingContent from "./trending-content";
import JoinNow from "./join-now";

const JoinNowTrendingContainer = () => {
    return (
        <div className='join-trending-container'>
            <div className='join-now'>
                <JoinNow/>
            </div>
            <div className='trending-media'>
                <div className='trending-movies'>
                    <TrendingContent mediaType='movie'/>
                </div>
                <div className='trending-shows'>
                    <TrendingContent colorTitle='yellow' mediaType='tv'/>
                </div>
            </div>
        </div>
    )
}

export default JoinNowTrendingContainer