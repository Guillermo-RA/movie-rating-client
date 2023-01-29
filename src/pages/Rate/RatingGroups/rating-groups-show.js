import {Link} from "react-router-dom";
// import {useEffect, useState} from "react";
import {useFetchRatingGroupsShow} from "../../../hooks/useFetchRatingGroupsShow";

const RatingGroupsShow = () => {

    const {ratingGroup:{title, user }, isFetching, error, error_message} = useFetchRatingGroupsShow();

    if (isFetching) {
        return <h2 className='title'>Cargando...</h2>
    } else if (error) {
        return <h2 className='title'>{error_message}</h2>
    } else
        return (
            <>
                <h2 className='title'>{title}</h2>
                <h3 className='title'>User: {user.name}</h3>
                <p className='title'>
                    <Link className='link link-orange' to={'/rating-groups'}>Volver</Link>
                </p>
            </>
        )
}

export default RatingGroupsShow