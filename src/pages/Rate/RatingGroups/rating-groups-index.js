import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const RatingGroupsIndex = () => {
    const [ratingGroups, setRatingGroups] = useState(null);
    const RatingGroups = (groups) => {
        return (
            <div className='rating_groups'>
                <ul>
                    {groups.map(({id, title}) => (
                        <li key={id}><Link to={`/rating-groups/${id}`}>{title}</Link></li>
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
        <h1>RatingGroups</h1>
        {RatingGroups(ratingGroups || [])}
    </div>
)
}

export default RatingGroupsIndex;