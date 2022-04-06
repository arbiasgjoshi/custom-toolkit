import React from 'react';
import PropTypes from 'prop-types';

const Button = ({value, hasStyle}) => {
  return (
    <button style={{...hasStyle}}>{value}</button>
  )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    // hasStyle: PropTypes.object,
}

export default Button;