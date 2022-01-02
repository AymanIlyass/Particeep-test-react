import React, { useState } from 'react'
import './Select.scss'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { mapDispatchToProps } from './Select.redux.js'


const Select = ({
    label,
    content,
    defaultValue,
    setCurrentCategoryReducer,
    setMoviesPerPageReducer
}) => {

    const [selectValue, setSelectValue] = useState(defaultValue)

    function handleChange(e) {
        setSelectValue(e.target.value)
        label === 'Catégories' && setCurrentCategoryReducer(e.target.value)
        label === 'Films par page' && setMoviesPerPageReducer(e.target.value)
    }

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <select
                name={label}
                value={selectValue}
                onChange={handleChange}
            >
                <option value={defaultValue}>{defaultValue}</option>
                {content.map((item, i) =>
                    item !== defaultValue &&
                    <option key={i} value={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    setCurrentCategoryReducer: PropTypes.func.isRequired,
    setMoviesPerPageReducer: PropTypes.func.isRequired
}

export default connect(
    undefined,
    mapDispatchToProps
)(Select)