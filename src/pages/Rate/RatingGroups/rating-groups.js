import {useEffect, useState} from "react";

const RatingGroups = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://movie-rating.test/api/v1/users')
            .then(res => res.json())
            .then(data => {
               setTimeout(() => {setData(data)}, 1000)
            });
    }, []);

return (
    <div>
        <h1>RatingGroups</h1>

        {data?<><p>Datos</p><p> Nombre: <b>{data?.name}</b></p><p>Nombre de usuario: <b>{data?.username}</b></p><p>Email: <b>{data?.email}</b></p></>:<p><b>Cargando...</b></p>}
    </div>
)
}

export default RatingGroups;