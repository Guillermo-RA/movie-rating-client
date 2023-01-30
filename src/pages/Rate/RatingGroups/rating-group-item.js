import {Link} from "react-router-dom";

const RatingGroupItem = ({group: {title, id}}) => {
    return (

                <li><Link className='link link-blue' to={`/rating-groups/${id}`}>{title}</Link></li>

    )
}

export default RatingGroupItem