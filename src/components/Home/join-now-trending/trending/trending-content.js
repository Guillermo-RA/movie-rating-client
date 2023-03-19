import { useFetchData } from '../../../../hooks/request-hooks/fetch-hooks'
import { useContext } from 'react'
import { ApiDataProvider } from '../../../../context/ApiDataProvider'
import ContentExhibitor from './content-exhibitor/content-exhibitor'

const TrendingContent = ({ colorTitle, mediaType, title, translator: { t: __, i18n } }) => {
  const { tmdbApiUrl, tmdbApiKey } = useContext(ApiDataProvider)
  const url = `${tmdbApiUrl}/trending/${mediaType}/week`
  const { data: { results }, isFetching } = useFetchData(url, tmdbApiKey, i18n)

  if (isFetching) {
    return <div className='title h3'>{__('loading', { ns: 'global' })}</div>
  }
  return (
    <div className={`trending-${title}`}>
      <span className={`h2 ${colorTitle || 'blue'}`}>{__(`trending.title.${mediaType}`)}</span>
      <div className='content-cards-container'>
        <ContentExhibitor content={ mediaType } media={results.slice(0, 8)} __={__}/>
      </div>
    </div>
  )
}

export default TrendingContent
