import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'


const Button = ({ lib, onclick, disabled }) => {

    return (
        <input
            type='button'
            value={lib}
            onClick={onclick}
            disabled={disabled}
        />
    )
}

Button.propTypes = {
    lib: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default Button