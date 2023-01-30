import MovieExhibitor from "../../../components/MovieExhibitor/movie-exhibitor";
import {useFetchData} from "../../../hooks/useFetchData";
import {useContext} from "react";
import {ApiDataProvider} from "../../../context/ApiDataProvider";

const TrendingMovies = () => {

    const {tmdbApiUrl, tmdbApiKey} = useContext(ApiDataProvider);
    const {data: {results}, isFetching} = useFetchData(`${tmdbApiUrl}/trending/all/week`, tmdbApiKey);

    if (isFetching) {
        return <div className='title h3'>Cargando...</div>
    }
    return (
        <>
            <span className='h2 blue'>Películas populares esta semana</span>
            <div className='movie-cards-container'>
                <MovieExhibitor movies={results.slice(0, 8)}/>
            </div>
        </>
    )

}

export default TrendingMovies