import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ApiDataProvider } from '../../../context/ApiDataProvider'
import { useFetchDataById } from '../../../hooks/request-hooks/fetch-hooks'
import { TranslatorProvider } from '../../../context/TranslatorProvider'

const RatingGroupsShow = () => {
  const { t: __ } = useContext(TranslatorProvider)
  const { restApiUrl } = useContext(ApiDataProvider)
  const { data: { title, user }, isFetching, error, errorMessage } = useFetchDataById(`${restApiUrl}/rating-groups`)

  if (isFetching) {
    return <div className='title h2'>{__('loading', { ns: 'global' })}</div>
  } else if (error) {
    return <div className='title h2'>{errorMessage}</div>
  } else {
    return (
      <>
        <h2 className='title'>{title}</h2>
        <h3 className='title'>User: {user.name}</h3>
        <p className='title'>
          <Link className='link link-orange' to={'/rating-groups'}>Volver</Link>
        </p>
      </>
    )
  }
}

export default RatingGroupsShow
