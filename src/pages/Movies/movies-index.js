const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const MoviesIndex = () => {
    return (<>
            <h2 className='title'>Movies</h2>
            <form action='https://api.themoviedb.org/3/search/movie'
                  method='GET'>
                <input type='hidden' name='api_key' value={`${API_KEY}`} />
                <input className='input-type' type='search' placeholder='Buscar' name='query' />
            </form>
        </>
    )
}

export default MoviesIndex