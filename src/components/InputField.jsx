import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputField.css';

function InputField(props) {
  const { label, value, handleChange } = props;
  return (
    <label value={value} htmlFor={`bio-${label}`}>
      {label}:
      <input
        type='text'
        id={`bio-${label}`}
        value={value}
        onChange={(e) => handleChange(label, e)}
      />
    </label>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func
};

export default InputField;
