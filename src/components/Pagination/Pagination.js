import React, { useState, useEffect } from 'react'
import './Pagination.scss'
import Button from '../commons/Button/Button'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './Pagination.redux.js'


const Pagination = ({
    currentPage,
    totalPages,
    setCurrentPageReducer,
    currentCategory
}) => {

    const [disabledPrevious, setDisabledPrevious] = useState(false)
    const [disabledNext, setDisabledNext] = useState(false)

    useEffect(() => {
        setCurrentPageReducer(1)
    }, [currentCategory, setCurrentPageReducer])


    useEffect(() => {
        setDisabledPrevious(currentPage === 1 ? true : false)
        setDisabledNext(currentPage === totalPages || totalPages === 0)
    }, [currentPage, totalPages])

    function goPreviousPage() {
        currentPage--
        setCurrentPageReducer(currentPage)
    }

    function goNextPage() {
        currentPage++
        setCurrentPageReducer(currentPage)
    }

    return (
        <div className='pagination'>
            {currentPage} / {totalPages}
            <Button
                disabled={disabledPrevious}
                onclick={goPreviousPage}
                lib='page précédente'
            />
            <Button
                disabled={disabledNext}
                onclick={goNextPage}
                lib='page suivante'
            />
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setCurrentPageReducer: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)