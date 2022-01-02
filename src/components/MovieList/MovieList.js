import React, { useState, useEffect } from 'react'
import './MovieList.scss'
import Movie from '../Movie/Movie'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './MovieList.redux.js'


const MovieList = ({
    isLoading,
    moviesList,
    setMoviesList,
    currentCategory,
    setCurrentCategoryReducer,
    moviesPerPage,
    setTotalPages,
    currentPage,
    setCurrentPageReducer,
    categoriesList,
    setCategoriesList
}) => {

    const [moviesListForCategory, setMoviesListForCategory] = useState(moviesList)
    const [moviesToPrint, setMoviesToPrint] = useState(moviesListForCategory)

    useEffect(() => {
        if (currentCategory === 'all') {
            setMoviesListForCategory(moviesList)
        } else {
            setMoviesListForCategory( moviesList.filter(
                movie => movie.category === currentCategory
            ))
        }
    }, [currentCategory, moviesList])

    useEffect(() => {
        setTotalPages(Math.ceil(moviesListForCategory.length / moviesPerPage))
    }, [moviesListForCategory, moviesPerPage, setTotalPages])

    useEffect(() => {
        setMoviesToPrint(moviesListForCategory.slice(
            (currentPage - 1) * moviesPerPage, currentPage * moviesPerPage
        ))
    }, [moviesListForCategory, currentPage, moviesPerPage])

    useEffect(() => {
        let timerGaugeEffect = setTimeout(() =>
            document.getElementsByTagName( 'main' )[0].classList.remove('gauge-inactive'), 300
        )
        return () => {
            document.getElementsByTagName( 'main' )[0].classList.add('gauge-inactive')
            clearTimeout(timerGaugeEffect)
        }
    }, [currentCategory, currentPage, moviesPerPage])

    function setUserEvaluation(id, userEvaluation) {
        setMoviesList(moviesList.map(movie =>
            movie.id === id ?
                movie.evaluation === userEvaluation ?
                    {...movie, evaluation: ''} :
                    {...movie, evaluation: userEvaluation} :
                movie
        ))
    }

    function deleteMovie(id, category) {
        setMoviesList(moviesList.filter(movie => movie.id !== id))
        if (moviesToPrint.length === 1 && currentPage > 1) {
            setCurrentPageReducer(currentPage - 1)
        }
        if (moviesList.filter(movie => movie.category === category).length === 1) {
            setCategoriesList(categoriesList.filter(
                categories => categories !== category
            ))
            setCurrentCategoryReducer('all')
        }
    }

    return (
        <main className='gauge-inactive'>
            <div className='movie-list container'>
                {
                    moviesList.length > 0 ?
                        moviesToPrint.map(movie =>
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                category={movie.category}
                                likes={movie.likes}
                                dislikes={movie.dislikes}
                                evaluation={movie.evaluation}
                                deleteMovie={deleteMovie}
                                setUserEvaluation={setUserEvaluation}
                            />
                        ) :
                            isLoading ?
                            <p>La vidéothèque est en cours de chargement.</p> :
                            <p>La vidéothèque est vide.</p>
                }
            </div>
        </main>
    )
}

MovieList.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    setMoviesList: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    setTotalPages: PropTypes.func.isRequired,
    setCurrentPageReducer: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList)