import ContentExhibitorItem from "./content-exhibitor-item";

import '../../../../../assets/scss/components/home/trending/content-exhibitor.scss'

const ContentExhibitor = ({media, ...props}) => {


    return (
        media.map(content => (
            <ContentExhibitorItem key={content.id} media={content} {...props}/>
        ))
    )

}

export default ContentExhibitor