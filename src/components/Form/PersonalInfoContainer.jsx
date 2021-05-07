import React, { Component } from 'react';
import '../../styles/PersonalInfo.css';
import InputGroup from './InputGroup';

class PersonalInfoContainer extends Component {
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
      <div>
        <h2>Personal Info</h2>
        <InputGroup
          inputs={[
            { type: 'name', value: name },
            { type: 'title', value: title },
            { type: 'location', value: location }
          ]}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default PersonalInfoContainer;
