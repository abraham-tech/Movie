import React,{useState} from 'react'

export default function PosterSearch () {
  const MINMOVIELENGTH = 3;
  const api_key = "c0359896"
  const [disableSearch, setDisableSearch] = useState(true);
  const [movieName, setMovieName] = useState('')
  const [msg, setMsg] = useState(`
  Enter at least ${MINMOVIELENGTH} letters from the movie's title
  `)
  const [posters, setPosters] = useState([]);

  function handleInput ({target: {value, minLength} }) {
    setDisableSearch(value.length < minLength)
    setMovieName(value)
  }

  function handleClick(e){
    e.preventDefault()
    setMsg('Searching...')
    fetch(`
    http://www.omdbapi.com/?s=${movieName}&apikey=${api_key}
    `)
    .then(resp => resp.json())
    .then(results => {
      if(results.Response === 'True'){
        setPosters(results.Search)
      }else {

        if(results.Error === 'Too many results.'){
          setMsg(results.Error)
        } 
       
        else if (results.Response === "False") {
          setMsg(`Sorry, we couldn't find that one. Please try again.`)
        } 
        if(results.Response === 'True' && results.totalResults) {
          setMsg(
            `Now showing the first ${results.movies.length} results of ${
              results.total
            }`
          )
          setPosters(results.movies)
          setDisableSearch(false)
        }
      }
    })
    .catch(e => {
      setMsg('Something went wrong. Please try again later.')
    })

  }
  return (
    <>
      <section className='PosterSearch'>
        <header className='header'>
          <h1>Posterz</h1>
          <h3>Find your favourite movie posters.</h3>
        </header>
        <main>
          <p>
            <label className='label' htmlFor='movie-name'>
              Movie title:
            </label>{' '}
            <input
              className='searchBox'
              type='search'
              id='movie-name'
              name='movie-name'
              placeholder='enter the name of a movie'
              onChange={handleInput}
              minLength={MINMOVIELENGTH}
              
            />
            <button id='search-button' className='searchButton'
            disabled= {disableSearch}
            onClick={handleClick}
            >
              Search
            </button>
            <br />
          </p>
          <p id='msg' >{msg}</p>
        </main>
        <section id='poster-grid' className='PosterGrid'>
          {posters.map(movie => (
            <img 
              key={movie.Title}
              src={movie.Poster}
              alt={movie.Title}
              title={movie.Title}
            />
          ))}
        </section> 
      </section>
    </>
  )
}
