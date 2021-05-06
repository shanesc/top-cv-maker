import React, { Component } from 'react';
import '../../styles/Form.css';
import InputField from './InputField';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { bio } = this.props.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {Object.entries(bio).map((property) => {
          const key = property[0];
          return (
            <InputField
              key={key}
              label={key}
              value={bio[key]}
              handleChange={this.props.handleChange}
            />
          );
        })}
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
