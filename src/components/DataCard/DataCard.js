import React from 'react'
import PropTypes from 'prop-types'

import './_DataCard.scss'

const DataCard = (props) => {
    const { className, style, type, value, children } = props;

    return (
        <div
            style={style}
            type={type}
            className={className}>
            {children || value}
        </div>
    )
}

DataCard.propTypes = {
    style: PropTypes.object,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string.isRequired
}

DataCard.defaultProps = {
    type: '',
    value: ''
}

export default DataCard;
