import {useContext} from "react";
import {useFetchDataById} from "../../hooks/personalized-hooks";
import {ApiDataProvider} from "../../context/ApiDataProvider";
import {Link} from "react-router-dom";

const ContentShow = () => {
    const {tmdbMovieUrl, tmdbApiKey} = useContext(ApiDataProvider)
    const {data: {title}, isFetching} = useFetchDataById(tmdbMovieUrl, tmdbApiKey)
    if (isFetching) {
        return <div className='title h3'>Cargando...</div>
    }
    return (
        <>
            <span className='h2 title'>{title}</span>
            <p className='title'>
                <Link className='link link-orange' to={'/'}>Volver</Link>
            </p>
        </>
    )
}

export default ContentShow