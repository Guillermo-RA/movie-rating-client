import JoinNow from './join-now'
import TrendingContentContainer from '../trending/trending-content-container'

const JoinNowTrendingContainer = ({ ...props }) => {
  return (
    <div className='join-trending-container'>
      <JoinNow {...props}/>
      <TrendingContentContainer {...props}/>
    </div>
  )
}

export default JoinNowTrendingContainer
