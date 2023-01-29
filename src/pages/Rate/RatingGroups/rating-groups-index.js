import RatingGroupItem from "./rating-group-item";
import {useFetchRatingGroupsIndex} from "../../../hooks/useFetchRatingGroupsIndex";

const RatingGroupsIndex = () => {
const {ratingGroups, isFetching} = useFetchRatingGroupsIndex();

    if (isFetching) {
        return <h2 className='title'>Cargando...</h2>
    }

    return (
        <>
            <h2 className='title'>Rating Groups</h2>
            <RatingGroupItem groups={ratingGroups || [] } />
        </>
    )
}

export default RatingGroupsIndex;