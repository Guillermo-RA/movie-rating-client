import {useContext} from "react";
import {ApiDataProvider} from "../../context/ApiDataProvider";
import { Star } from 'feather-icons-react'
import {Link} from "react-router-dom";

import '../../assets/scss/components/content-exhibitor.scss'
import {TranslatorProvider} from "../../context/TranslatorProvider";

const ContentExhibitor = ({
                                media: {
                                    id,
                                    title,
                                    name,
                                    vote_average,
                                    poster_path
                                }
                            }) => {

    const {tmdbImageUrl} = useContext(ApiDataProvider)
    const {t: __} = useContext(TranslatorProvider);
    const averageVote = Math.round((vote_average + Number.EPSILON) * 100) / 100;
    return (
        <Link to={`/content/${id}`}>
            <div className="content-card" title={__('trending-content.rate-it')}>
                <div className="content-card-inner">
                    <div className="content-card-front">
                        <div className='w-100'>
                            <img alt={title} className='content-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                        </div>
                    </div>
                    <div className="content-card-back">
                        <p className="content-card-title">{title || name}</p>
                        <div className='content-card-subtitle'><Star width='20' color='#FFCC6A'/><span>{averageVote}/10</span></div>
                        <div className='w-100'>
                            <img alt={title} className='content-card-image' src={`${tmdbImageUrl}${poster_path}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default ContentExhibitor