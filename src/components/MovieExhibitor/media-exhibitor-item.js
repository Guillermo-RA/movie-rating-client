import {useContext} from "react";
import {ApiDataProvider} from "../../context/ApiDataProvider";
import { Star } from 'feather-icons-react'
import {Link} from "react-router-dom";

import '../../assets/scss/components/media-exhibitor.scss'

const MediaExhibitorItem = ({
                                media: {
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
            <div className="media-card" title='Puntúala ya'>
                <div className="media-card-inner">
                    <div className="media-card-front">
                        <div className='w-100'>
                            <img alt={title} className='media-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                        </div>
                    </div>
                    <div className="media-card-back">
                        <p className="media-card-title">{title || name}</p>
                        <div className='media-card-subtitle'><Star width='20' color='#FFCC6A'/><span>{averageVote}/10</span></div>
                        <div className='w-100'>
                            <img alt={title} className='media-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default MediaExhibitorItem