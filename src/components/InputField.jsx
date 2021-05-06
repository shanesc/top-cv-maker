import React from 'react';
import PropTypes from 'prop-types';

function InputField(props) {
  const { propKey, value, handleChange } = props;
  return (
    <label value={value} htmlFor={`bio-${propKey}`}>
      {sentenceCase(propKey)}:
      <input
        type='text'
        id={`bio-${propKey}`}
        value={value}
        onChange={(e) => handleChange(propKey, e)}
      />
    </label>
  );
}

function sentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

InputField.propTypes = {};

export default InputField;
