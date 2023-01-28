import {useEffect, useState} from "react";
import axios from "axios";

const useFetchRatingGroups = () => {
    const [ratingGroups, setRatingGroups] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get('http://movie-rating.test/api/v1/rating-groups')
            .then(({data}) => {
                setRatingGroups(data)
            })
            .catch(e => {
                console.error(e);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return {ratingGroups, isFetching}
}

export {useFetchRatingGroups};