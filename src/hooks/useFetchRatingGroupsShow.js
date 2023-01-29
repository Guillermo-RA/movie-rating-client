import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

// TODO Refactorizar hook para dividir control de errores y fetch
const useFetchRatingGroupsShow = () => {
    const [ratingGroup, setRatingGroup] = useState({ratingGroup: {title: '', user: {}}});
    const [{error, error_message}, setError] = useState({error: false, error_message: ''});
    const [isFetching, setIsFetching] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        axios
            .get(`http://movie-rating.test/api/v1/rating-groups/${id}`)
            .then(({data: {data}}) => {
                setRatingGroup(data)
            })
            .catch(({response: {data: {error, error_message}, status}}) => {
                setError({error, error_message});

                if (status === 404) {
                    throw new Error(error_message)
                }

            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, [id]);

    return {ratingGroup, isFetching, error, error_message}
}

export {useFetchRatingGroupsShow}