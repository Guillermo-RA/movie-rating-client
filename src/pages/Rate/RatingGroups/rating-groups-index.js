import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const RatingGroupsIndex = () => {
    const [ratingGroups, setRatingGroups] = useState(null);
    const RatingGroups = (groups) => {
        return (
            <div className='rating_groups'>
                <ul className='list-no-decoration'>
                    {groups.map(({id, title}) => (
                        <li key={id}><Link className='page-link' to={`/rating-groups/${id}`}>{title}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }
    useEffect(() => {
        fetch('http://movie-rating.test/api/v1/rating-groups')
            .then(res => res.json())
            .then(data => setRatingGroups(data));
    }, []);


return (
    <div>
        <h2 className='page-title'>RatingGroups</h2>
        {RatingGroups(ratingGroups || [])}
    </div>
)
}

export default RatingGroupsIndex;