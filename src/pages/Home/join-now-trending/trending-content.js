import ContentExhibitor from "../../../components/ContentExhibitor/content-exhibitor";
import {useContext} from "react";
import {useFetchData} from "../../../hooks/personalized-hooks";
import {ApiDataProvider} from "../../../context/ApiDataProvider";
import {TranslatorProvider} from "../../../context/TranslatorProvider";

const TrendingContent = ({colorTitle, mediaType}) => {
    const {t: __, i18n} = useContext(TranslatorProvider)
    const {tmdbApiUrl, tmdbApiKey} = useContext(ApiDataProvider);
    const url = `${tmdbApiUrl}/trending/${mediaType}/week`;
    const {data: {results}, isFetching} = useFetchData(url, tmdbApiKey, i18n);

    if (isFetching) {
        return <div className='title h3'>Cargando...</div>
    }
    return (
        <>
            <span className={`h2 ${colorTitle || 'blue'}`}>{__(`trending-content.title.${mediaType}`)}</span>
            <div className='content-cards-container'>
                <ContentExhibitor media={results.slice(0, 8)}/>
            </div>
        </>
    )

}

export default TrendingContent