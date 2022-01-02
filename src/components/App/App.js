import React, { useEffect, useState } from 'react'
import './App.scss'
import { movies$ } from '../../data/movies'
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types'


const App = () => {

    useEffect(() => {
        movies$
            .then(
                movies => {
                    setMoviesList(movies)
                    setIsLoading(false)
                }
            )
            .catch(error => console.log(error))
    }, [])

    const [isLoading, setIsLoading] = useState(true)
    const [moviesList, setMoviesList] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setCategoriesList([...new Set(moviesList.map(movie => movie.category))])
    }, [moviesList])

    return (
        <div className="App">
            <Header categoriesList={categoriesList} />
            <MovieList
                isLoading={isLoading}
                moviesList={moviesList}
                setMoviesList={setMoviesList}
                setTotalPages={setTotalPages}
                categoriesList={categoriesList}
                setCategoriesList={setCategoriesList}
            />
            <Footer totalPages={totalPages} />
        </div>
    )
}

App.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.object),
    setMoviesList: PropTypes.func,
    categoriesList: PropTypes.arrayOf(PropTypes.string),
    totalPages: PropTypes.number,
    setTotalPages: PropTypes.func
}

export default App