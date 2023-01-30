import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import setErrorMessages from "../helpers/error-messages";

const useFetchData = (url, apiKey) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get(url, {params: {api_key: apiKey}})
            .then(({data}) => {
                setData(data)
            })
            .catch(({code}) => {
                throw new Error(setErrorMessages(code));
            })
            .catch(errorMessage => {
                    console.error(errorMessage)
                }
            )
            .finally(() => {
                setIsFetching(false);
            });
    }, [url, apiKey]);

    return {data, isFetching}
}

// TODO Refactorizar hook para dividir control de errores y fetch
const useFetchDataById = (url, apiKey) => {
    const [data, setData] = useState({ratingGroup: {title: '', user: {}}});
    const [{error, error_message}, setError] = useState({error: false, error_message: ''});
    const [isFetching, setIsFetching] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        axios
            .get(`${url}/${id}`, {params: {api_key: apiKey}})
            .then(({data}) => {
                if (apiKey)
                    setData(data)
                else
                    setData(data.data)
            })
            .catch(({response: {data: {error, error_message}}, code}) => {
                setError({error, error_message});

                throw new Error(setErrorMessages(code));

            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, [id, url, apiKey]);

    return {data, isFetching, error, error_message}
}

export {useFetchData, useFetchDataById};