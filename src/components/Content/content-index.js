const apiKey = process.env.REACT_APP_TMDB_API_KEY
const ContentIndex = () => {
  return (
    <>
      <h2 className='title'>Content</h2>
      <form action='https://api.themoviedb.org/3/search/movie'
        method='GET'>
        <input type='hidden' name='api_key' value={`${apiKey}`} />
        <input className='input-text' type='search' placeholder='Buscar' name='query' />
      </form>
    </>
  )
}

export default ContentIndex
