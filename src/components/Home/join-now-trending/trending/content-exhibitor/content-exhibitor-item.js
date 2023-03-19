import { useContext } from 'react'
import { Star } from 'feather-icons-react'
import { Link } from 'react-router-dom'
import { ApiDataProvider } from '../../../../../context/ApiDataProvider'
const ContentExhibitorItem = ({
  media: { id, title, name, vote_average: voteAverage, poster_path: posterPath },
  content,
  __,
}) => {
  const { tmdbImageUrl } = useContext(ApiDataProvider)
  const averageVote = Math.round((voteAverage + Number.EPSILON) * 100) / 100
  return (
    <Link to={`/content/${content}/${id}`}>
      <div className="content-card" title={__('trending.rate-it')}>
        <div className="content-card-inner">
          <div className="content-card-front">
            <div className="w-100">
              <img
                alt={title}
                className="content-card-image"
                src={`${tmdbImageUrl}${posterPath}`}
              />
            </div>
          </div>
          <div className="content-card-back">
            <p className="content-card-title">{title || name}</p>
            <div className="content-card-subtitle">
              <Star width="20" color="#FFCC6A" />
              <span>{averageVote}/10</span>
            </div>
            <div className="w-100">
              <img
                alt={title}
                className="content-card-image"
                src={`${tmdbImageUrl}${posterPath}`}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ContentExhibitorItem
