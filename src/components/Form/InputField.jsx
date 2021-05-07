import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/InputField.css';

function InputField(props) {
  const {
    label,
    value,
    id,
    name,
    handleChange = () => console.log(value)
  } = props;
  return (
    <label value={value} htmlFor={id}>
      {label}
      <input
        type='text'
        id={id}
        placeholder={label}
        value={value}
        name={name}
        onChange={handleChange}
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
