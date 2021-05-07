import React, { Component } from 'react';
import '../../styles/Form.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';

class Form extends Component {
  render() {
    const { personalInfo, experience } = this.props.state;
    return (
      <form>
        <PersonalInfo info={personalInfo} />
        {experience.map((item) => {
          return <Experience info={item} />;
        })}
      </form>
    );
  }
}

export default Form;
