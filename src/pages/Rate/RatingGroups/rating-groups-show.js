import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";

const RatingGroupsShow = () => {

    const [ratingGroup, setRatingGroup] = useState({});
    const [{error, error_message}, setError] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://movie-rating.test/api/v1/rating-groups/${id}`)
            .then(res => res.json())
            .then(({data, error, error_message}) => {
                if (!error)
                    setRatingGroup(data)
                else
                    setError({error: error, error_message: error_message});
            });
    }, [id]);

    return (
        !error ?
            (
                <>
                    <h2 className='page-title'>{ratingGroup.title}</h2>
                    <h3 className='page-title'>User: {ratingGroup.user?.name}</h3>
                    <p className='page-title'><Link className='page-link link-orange' to={'/rating-groups'}>Volver</Link></p>
                </>
            )
            : <h1>{error_message}</h1>
    )

}

export default RatingGroupsShow