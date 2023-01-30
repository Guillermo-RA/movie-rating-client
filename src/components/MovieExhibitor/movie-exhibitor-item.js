import {useContext} from "react";
import {ApiDataProvider} from "../../context/ApiDataProvider";
import { Star } from 'feather-icons-react'
import {Link} from "react-router-dom";

import '../../assets/scss/components/movie-exhibitor.scss'

const MovieExhibitorItem = ({
                                movie: {
                                    id,
                                    title,
                                    name,
                                    vote_average,
                                    poster_path
                                }
                            }) => {

    const {tmdbImageUrl} = useContext(ApiDataProvider)
    const averageVote = Math.round((vote_average + Number.EPSILON) * 100) / 100;
    return (
        <Link to={`/movies/${id}`}>
            <div className="movie-card">
                <div className="movie-card-inner">
                    <div className="movie-card-front">
                        <div className='w-100'>
                            <img alt={title} className='movie-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                        </div>
                    </div>
                    <div className="movie-card-back">
                        <p className="movie-card-title">{title || name}</p>
                        <div className='movie-card-subtitle'><Star width='20' color='#FFCC6A'/><span>{averageVote}/10</span></div>
                        <div className='w-100'>
                            <img alt={title} className='movie-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default MovieExhibitorItem