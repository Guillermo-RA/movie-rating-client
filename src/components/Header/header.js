import Navbar from './navbar/navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header bg-dark-blue'>
      <div className='app-logo-container'>
        <Link className='link link-light-orange' to='/'><span className='app-logo my-1'>Movie Rating</span></Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
