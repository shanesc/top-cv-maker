import React, { Component } from 'react';
import InputField from './InputField';
import '../../styles/PersonalInfo.css';

class PersonalInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      title: '',
      location: ''
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, title, location } = this.state;
    return (
      <div className='form-field'>
        <h2>Personal Info</h2>
        <InputField
          id='name-input'
          label='name'
          name='name'
          value={name}
          handleChange={this.handleInputChange}
        />
        <InputField
          id='title-input'
          label='title'
          name='title'
          value={title}
          handleChange={this.handleInputChange}
        />
        <InputField
          id='location-input'
          label='location'
          name='location'
          value={location}
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default PersonalInfo;
