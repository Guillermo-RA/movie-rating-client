import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {getErrorMessages} from "./get-request-errors";

const useFetchData = (url, apiKey, i18n) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get(url, {params: {api_key: apiKey, language: i18n?.language}})
            .then(({data}) => {
                setData(data)
            })
            .catch(({code}) => {
                throw new Error(getErrorMessages(code));
            })
            .catch(errorMessage => {
                    console.error(errorMessage)
                }
            )
            .finally(() => {
                setIsFetching(false);
            });
    }, [url, apiKey, i18n?.language]);

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

                throw new Error(getErrorMessages(code));

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

export {useFetchData, useFetchDataById}