import React, { useState, useEffect } from 'react'
import '../App.css'
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

const MOVIE_API_URL = 'http://www.omdbapi.com/?s=man&plot=short&apikey=d1ec7a53'

const App: React.FC = () => {
  const [loading, setLoading] = useState<any>(true)
  const [movies, setMovies] = useState<any>([])
  const [errorMessage, setErrorMessage] = useState<any>(null)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search)
        setLoading(false)
      })
  }, [])

  const search = (searchValue: string) => {
    setLoading(true)
    setErrorMessage(null)

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=d1ec7a53&plot=full`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search)
          setLoading(false)
        } else {
          setErrorMessage(jsonResponse.Error)
          setLoading(false)
        }
      })
  }

  console.log(movies)
  return (
    <div className="App">
      <Header />
      <Search search={search} />
      <p className="App-intro"> Sharing a new of our favorites movie</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading ...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie: any, index: any) => (
            <Movie key={`${index} - ${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default App
