import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({name, type = 'text', value = '', placeholder, onChange }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={(val) => onChange(val)} />
  )
}

InputComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default InputComponent