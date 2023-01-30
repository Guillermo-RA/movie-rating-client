import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const useFetchData = (url, apiKey) => {
    url = apiKey?`${url}?api_key=${apiKey}`:url;
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get(url)
            .then(({data}) => {
                setData(data)
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
    }, [url]);

    return {data, isFetching}
}

    // TODO Refactorizar hook para dividir control de errores y fetch
const useFetchDataById = (url) => {
        const [data, setData] = useState({ratingGroup: {title: '', user: {}}});
        const [{error, error_message}, setError] = useState({error: false, error_message: ''});
        const [isFetching, setIsFetching] = useState(true);
        const {id} = useParams();
        useEffect(() => {
            axios
                .get(`${url}/${id}`)
                .then(({data: {data}}) => {
                    setData(data)
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
        }, [id, url]);

        return {data, isFetching, error, error_message}
}

export {useFetchData, useFetchDataById};