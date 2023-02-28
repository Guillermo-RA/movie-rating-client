import TrendingContent from "./trending-content";

const TrendingContentContainer = ({...props}) => {

    return (
        <div className='trending-content'>
            <TrendingContent mediaType='movie' title='movies' {...props} />
            <TrendingContent colorTitle='yellow' mediaType='tv' title='shows' {...props} />
        </div>
    )
}

export default TrendingContentContainer