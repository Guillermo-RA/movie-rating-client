import ContentExhibitorItem from './content-exhibitor-item'

import '../../../../../assets/scss/components/home/trending/content-exhibitor.scss'

const ContentExhibitor = ({ media, mediaType, ...props }) => {
  return media.map((content) => (
    <ContentExhibitorItem content={mediaType} key={content.id} media={content} {...props} />
  ))
}

export default ContentExhibitor
