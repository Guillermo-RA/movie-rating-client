import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const RatingGroupShow = () => {

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
                    <h1>{ratingGroup.title}</h1>
                    <h2>User: {ratingGroup.user?.name}</h2>
                </>
            )
            : <h1>{error_message}</h1>
    )

}

export default RatingGroupShow