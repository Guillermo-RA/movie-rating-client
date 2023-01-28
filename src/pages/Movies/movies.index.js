const MoviesIndex = () => {
    return (<>
            <h2 className='page-title'>Movies</h2>
            <form action='https://api.themoviedb.org/3/search/movie'
                  method='GET'>
                <input type='hidden' name='api_key' value='9624bc057859dca60609ef68bebd1552' />
                <input className='input-type' type='search' placeholder='Buscar' name='query' />
            </form>
        </>
    )
}

export default MoviesIndex