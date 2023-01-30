import MediaExhibitorItem from "./media-exhibitor-item";

const MediaExhibitor = ({media}) => {

    // const {trendingMovies, isFetching} = useFetchTrendingMovies();

    return (
        media.map(content => {
            return <MediaExhibitorItem key={content.id} media={content} />
        })
    )

}

export default MediaExhibitor