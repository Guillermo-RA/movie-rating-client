import MovieExhibitorItem from "./movie-exhibitor-item";

const MovieExhibitor = ({movies}) => {

    // const {trendingMovies, isFetching} = useFetchTrendingMovies();

    return (
            movies.map(movie => {
            return <MovieExhibitorItem key={movie.id} movie={movie} />
        })
    )

}

export default MovieExhibitor