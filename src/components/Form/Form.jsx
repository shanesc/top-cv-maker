import React, { Component } from 'react';
import '../../styles/Form.css';
import PersonalInfoContainer from './PersonalInfoContainer';
import ExperienceContainer from './ExperienceContainer';

class Form extends Component {
  render() {
    return (
      <form>
        <PersonalInfoContainer />
        <ExperienceContainer />
      </form>
    );
  }
}

export default Form;
