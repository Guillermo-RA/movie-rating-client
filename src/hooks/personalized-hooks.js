import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import setErrorMessages from "../helpers/error-messages";
import {availableLanguages} from "../components/Header/languages/available-languages";

const useFetchData = (url, apiKey, {language}) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get(url, {params: {api_key: apiKey, language: language}})
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
    }, [url, apiKey, language]);

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

const useGetLanguage = () => {
    const storage = localStorage.getItem('language');

    return storage ? JSON.parse(storage) : availableLanguages[0];
}

const useHandleClickLanguages = (setDropdown, dropdown) => {
    useEffect(() => {
        const closeDropdown = (e) => {
            const target = e.target.classList;

            if (!target.contains('languages-options') && !target.contains('list-no-decoration'))
                setDropdown(false);
        }
        if (dropdown) {
            document.querySelector(':not(.languages-container, .languages-button)')
                .addEventListener('click', closeDropdown)
        }
        return () => document.querySelector(':not(.languages-container, .languages-button, .languages-options)').removeEventListener('click', closeDropdown)

    }, [setDropdown, dropdown])
}

export {useFetchData, useFetchDataById, useHandleClickLanguages, useGetLanguage}

