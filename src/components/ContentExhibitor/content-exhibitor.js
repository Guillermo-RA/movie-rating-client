import ContentExhibitorItem from "./content-exhibitor-item";

const ContentExhibitor = ({media}) => {


    return (
        media.map(content => {
            return <ContentExhibitorItem key={content.id} media={content} />
        })
    )

}

export default ContentExhibitor