import {Link} from "react-router-dom";

const RatingGroupItem = ({groups}) => {
    return (
        <div className='rating_groups'>
            <ul className='list-no-decoration'>
                {groups.map(({id, title}) => (
                    <li key={id}><Link className='link link-medium-blue' to={`/rating-groups/${id}`}>{title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default RatingGroupItem