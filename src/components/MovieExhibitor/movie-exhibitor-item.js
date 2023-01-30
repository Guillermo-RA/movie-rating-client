import {useContext} from "react";
import {ApiDataProvider} from "../../context/ApiDataProvider";

import '../../assets/scss/components/movie-exhibitor.scss'

const MovieExhibitorItem = ({
                                movie: {
                                    title,
                                    name,
                                    vote_average,
                                    poster_path
                                }
                            }) => {

    const {tmdbImageUrl} = useContext(ApiDataProvider)

    return (
        <div className="movie-card">
            <div className="movie-card-inner">
                <div className="movie-card-front">
                    <div className='w-100'>
                        <img alt={title} className='movie-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                    </div>
                    <p className="movie-card-title">{title || name}</p>
                    <p className={'movie-card-title'}>{vote_average}</p>
                </div>
                <div className="movie-card-back">
                    <p className="title">{title || name}</p>
                    <p>Media de votos: {vote_average}</p>
                </div>
            </div>
        </div>
    )

}

export default MovieExhibitorItem