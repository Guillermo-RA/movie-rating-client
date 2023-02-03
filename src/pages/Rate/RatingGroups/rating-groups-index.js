import RatingGroupItem from "./rating-group-item";
import {useContext} from "react";
import {ApiDataProvider} from "../../../context/ApiDataProvider";
import {useFetchData} from "../../../hooks/personalized-hooks";

const RatingGroupsIndex = () => {
    const {restApiUrl} = useContext(ApiDataProvider);
    const {data:groups, isFetching} = useFetchData(`${restApiUrl}/rating-groups`);

    if (isFetching) {
        return <div className='title h2'>Cargando...</div>
    }

    return (
        <>
            <h2 className='title'>Rating Groups</h2>
            <div className='rating_groups'>
                <ul className='list-no-decoration'>
                    {groups.map(group => {
                        return <RatingGroupItem key={group.id} group={group}/>
                    })}
                </ul>
            </div>
        </>
    )
}

export default RatingGroupsIndex;