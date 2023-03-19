import { createContext } from 'react'

const ApiDataProvider = createContext({
  restApiUrl: process.env.REACT_APP_REST_API_URL,
  tmdbApiUrl: process.env.REACT_APP_TMDB_API_URL,
  tmdbApiKey: process.env.REACT_APP_TMDB_API_KEY,
  tmdbImageUrl: process.env.REACT_APP_TMDB_IMAGES_URL,
  tmdbMovieUrl: process.env.REACT_APP_TMDB_MOVIE_URL,
})

export { ApiDataProvider }
