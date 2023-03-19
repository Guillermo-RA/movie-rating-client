import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { routesTitles } from '../../constants/routes/routes-titles'

const useTitle = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')

  useEffect(() => {
    const route = routesTitles.find(({ path }) => path === location.pathname)
    setTitle(route ? route.title : 'Movie Rating')
  }, [location])

  useEffect(() => {
    document.title = title
  }, [title])
}

const useAuth = (condicion) => {
  return { isAuthenticated: condicion }
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    })
  }, [pathname])

  return null
}


export { useTitle, useAuth }
export default ScrollToTop
