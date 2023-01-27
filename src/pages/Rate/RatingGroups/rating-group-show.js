import {useParams, useNavigate, Link} from "react-router-dom";
import {useEffect, useState} from "react";

const RatingGroupShow = () => {

    const [ratingGroup, setRatingGroup] = useState({});
    const [{error, error_message}, setError] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

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
                    <Link className='page-link' to={''} onClick={() => navigate(-1)}>Volver</Link>
                </>
            )
            : <h1>{error_message}</h1>
    )

}

export default RatingGroupShow