import React from 'react';
import InputField from '../../InputField';
import PropTypes from 'prop-types';

function InputGroup(props) {
  const { title, inputs, handleInputChange, children } = props;

  const inputFields = inputs.map((input) => {
    const { type, value } = input;
    return (
      <InputField
        key={type}
        id={`${type}-input`}
        label={type}
        name={type}
        value={value}
        handleChange={handleInputChange}
      />
    );
  });

  const header = title ? <h3>{title}</h3> : null;

  return (
    <div className='form-field'>
      {header}
      {inputFields}
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  handleInputChange: PropTypes.func
};

export default InputGroup;
