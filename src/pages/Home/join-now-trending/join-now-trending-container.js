import TrendingMedia from "./trending-media";
import JoinNow from "./join-now";

const JoinNowTrendingContainer = () => {
    return (
        <div className='join-trending-container'>
            <div className='join-now'>
                <JoinNow/>
            </div>
            <div className='trending-media'>
                <div className='trending-movies'>
                    <TrendingMedia title='Películas populares esta semana' mediaType='movie'/>
                </div>
                <div className='trending-shows'>
                    <TrendingMedia title='Series populares esta semana' colorTitle='yellow' mediaType='tv'/>
                </div>
            </div>
        </div>
    )
}

export default JoinNowTrendingContainer