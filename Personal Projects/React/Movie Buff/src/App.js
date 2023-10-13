import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// c89611c8 : API KEY.

const API_URL = 'http://www.omdbapi.com?apikey=c89611c8';

const movie1 = {
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)

    const searchMovies = async (title) => {
        setLoading(true)
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search);
        setLoading(false)
    }

    // const loadingStyle = {
    //     width: '10px',
    //     height: '30px'
    // }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    return (
        <div className='app'>
            <h1>MovieBuff</h1>

            <div className='search'>
                <input placeholder='Search the name of Movie'
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
            </div>

            {
                loading && 
                <div class="d-flex justify-content-center" /*style={loadingStyle}*/>
                    <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            {
                movies.length > 0 ?
                    (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }

        </div>
    )
}

export default App;