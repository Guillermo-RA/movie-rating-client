import { useContext } from 'react'
import { useFetchDataById } from '../../hooks/request-hooks/fetch-hooks'
import { ApiDataProvider } from '../../context/ApiDataProvider'
import { Link } from 'react-router-dom'
import { TranslatorProvider } from '../../context/TranslatorProvider'

const ContentShow = () => {
  const { t: __ } = useContext(TranslatorProvider)
  const { tmdbMovieUrl, tmdbApiKey } = useContext(ApiDataProvider)
  const { data: { title }, isFetching } = useFetchDataById(tmdbMovieUrl, tmdbApiKey)
  if (isFetching) {
    return <div className='title h3'>{__('loading', { ns: 'global' })}</div>
  }
  return (
    <>
      <span className='h2 title'>{title}</span>
      <p className='title'>
        <Link className='link link-orange' to={'/'}>Volver</Link>
      </p>
    </>
  )
}

export default ContentShow
