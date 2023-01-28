import RatingGroupItem from "./rating-group-item";
import {useFetchRatingGroups} from "../../../hooks/useFetchRatingGroups";

const RatingGroupsIndex = () => {
const {ratingGroups, isFetching} = useFetchRatingGroups();

    if (isFetching) {
        return <h2 className='page-title'>Cargando...</h2>
    }

    return (
        <>
            <h2 className='page-title'>RatingGroups</h2>
            {RatingGroupItem(ratingGroups || [])}
        </>
    )
}

export default RatingGroupsIndex;