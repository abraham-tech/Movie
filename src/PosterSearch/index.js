import React,{useState} from 'react'

export default function PosterSearch () {
  const MINMOVIELENGTH = 3;
  const [disableSearch, setDisableSearch] = useState(true);
  const [movieName, setMovieName] = useState('')
  const [msg, setMsg] = useState(`
  Enter at least ${MINMOVIELENGTH} letters from the movie's title
  `)

  function handleInput ({target: {value, minLength} }) {
    setDisableSearch(value.length < minLength)
    setMovieName(value)
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
            >
              Search
            </button>
            <br />
          </p>
          <p id='msg' />
        </main>
        <section id='poster-grid' className='PosterGrid' />
      </section>
    </>
  )
}
