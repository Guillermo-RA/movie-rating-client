import RatingGroupItem from './rating-group-item'
import { useContext } from 'react'
import { ApiDataProvider } from '../../../context/ApiDataProvider'
import { useFetchData } from '../../../hooks/request-hooks/fetch-hooks'
import { TranslatorProvider } from '../../../context/TranslatorProvider'

const RatingGroupsIndex = () => {
  const { t: __, i18n } = useContext(TranslatorProvider)
  const { restApiUrl } = useContext(ApiDataProvider)
  const { data: groups, isFetching } = useFetchData(`${restApiUrl}/rating-groups`, i18n)

  if (isFetching) {
    return <div className="title h2">{__('loading', { ns: 'global' })}</div>
  }

  return (
    <>
      <h2 className="title">{__('title')}</h2>
      <div className="rating_groups">
        <ul className="list-no-decoration">
          {groups.map((group) => (
            <RatingGroupItem key={group.id} group={group} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default RatingGroupsIndex
