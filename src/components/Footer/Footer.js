import React from 'react'
import './Footer.scss'
import Select from '../commons/Select/Select'
import Pagination from '../Pagination/Pagination'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { mapStateToProps } from './Footer.redux.js'


const Footer = ({
    moviesPerPage,
    totalPages
}) => {

    return (
        <footer>
            <div className='container'>
                <Select
                    label='Films par page'
                    content={[4, 8, 12]}
                    defaultValue={parseInt(moviesPerPage)}
                />
                <Pagination totalPages={totalPages} />
            </div>
        </footer>
    )
}

Footer.propTypes = {
    totalPages: PropTypes.number.isRequired
}

export default connect(
    mapStateToProps,
    undefined
)(Footer)