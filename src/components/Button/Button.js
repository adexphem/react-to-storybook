import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const { className, style, type, value, onClick, children } = props;

    return (
        <button
            style={style}
            type={type}
            onClick={(e) => onClick && onClick(e, props)}
            className={className}>
            {children || value}
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string.isRequired
}

Button.defaultProps = {
    type: '',
    value: ''
}

export default Button;
