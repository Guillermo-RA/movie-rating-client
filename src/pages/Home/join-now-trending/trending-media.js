import MediaExhibitor from "../../../components/MovieExhibitor/media-exhibitor";
import {useFetchData} from "../../../hooks/useFetchData";
import {useContext} from "react";
import {ApiDataProvider} from "../../../context/ApiDataProvider";

const TrendingMedia = ({title, colorTitle, mediaType}) => {

    const {tmdbApiUrl, tmdbApiKey} = useContext(ApiDataProvider);
    const {data: {results}, isFetching} = useFetchData(`${tmdbApiUrl}/trending/${mediaType}/week`, tmdbApiKey);

    if (isFetching) {
        return <div className='title h3'>Cargando...</div>
    }
    return (
        <>
            <span className={`h2 ${colorTitle || 'blue'}`}>{title}</span>
            <div className='media-cards-container'>
                <MediaExhibitor media={results.slice(0, 8)}/>
            </div>
        </>
    )

}

export default TrendingMedia