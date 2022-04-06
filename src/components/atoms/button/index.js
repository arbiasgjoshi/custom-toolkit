import React from 'react';
import PropTypes from 'prop-types';

import {defaultStyle} from './button.module.scss'

const Button = ({value, hasStyle}) => {
  return (
    <button className={defaultStyle} style={hasStyle}>{value}</button>
  )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    // hasStyle: PropTypes.object,
}

export default Button