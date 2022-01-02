import React from 'react'
import './Header.scss'
import Select from '../commons/Select/Select'
import PropTypes from 'prop-types'


const Header = ({ categoriesList }) => {

    return (
        <header>
            <div className='container'>
                <Select
                    label='Catégories'
                    content={categoriesList}
                    defaultValue='all'
                />
            </div>
        </header>
    )
}

Header.propTypes = {
    categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Header