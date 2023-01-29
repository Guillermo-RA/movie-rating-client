import {useEffect, useState} from "react";
import axios from "axios";

const useFetchRatingGroupsIndex = () => {
    const [ratingGroups, setRatingGroups] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get('http://movie-rating.test/api/v1/rating-groups')
            .then(({data}) => {
                setRatingGroups(data)
            })
            .catch(({response: {status}}) => {
                if (status === 404)
                    throw new Error('Server error. Try again later or contact this site administrator')
            })
            .catch(e => {
                console.error(e)
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return {ratingGroups, isFetching}
}

export {useFetchRatingGroupsIndex};