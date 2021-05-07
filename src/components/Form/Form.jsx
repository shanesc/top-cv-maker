import React, { Component } from 'react';
import '../../styles/Form.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';

class Form extends Component {
  render() {
    return (
      <form>
        <PersonalInfo />
        <Experience />
      </form>
    );
  }
}

export default Form;
