import React from 'react'
import PropTypes from 'prop-types';

const CustomHeading = ({ title }) => {
    return (
        <div className="container text-center my-5">
            <h2 className="custom-heading">{title}</h2>
        </div>
    )
}

// PropTypes validation
CustomHeading.propTypes = {
    title: PropTypes.string.isRequired
}

export default CustomHeading