import React, { Component } from 'react';
import '../../styles/Form.css';
import InputField from './InputField';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { bio, experience } = this.props.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='bio'>
          <h2>Bio</h2>
          {Object.entries(bio).map((property) => {
            const key = property[0];
            return (
              <InputField
                key={key}
                label={key}
                value={bio[key]}
                handleChange={this.props.handleBioChange}
              />
            );
          })}
        </div>
        <div className='experience'>
          <h2>Experience</h2>
          <InputField
            label='title'
            value={experience[0].title}
            handleChange={this.props.handleExperienceChange}
            arrayId='1'
          />
          <InputField
            label='organization'
            value={experience[0].organization}
            handleChange={this.props.handleExperienceChange}
            arrayId='1'
          />
          <InputField
            label='startDate'
            value={experience[0].startDate}
            handleChange={this.props.handleExperienceChange}
            arrayId='1'
          />
          <InputField
            label='endDate'
            value={experience[0].endDate}
            handleChange={this.props.handleExperienceChange}
            arrayId='1'
          />
          <InputField
            label='description'
            value={experience[0].description}
            handleChange={this.props.handleExperienceChange}
            arrayId='1'
          />
        </div>
        <div className='experience'>
          <h2>Experience</h2>
          <InputField
            label='title'
            value={experience[1].title}
            handleChange={this.props.handleExperienceChange}
            arrayId='2'
          />
          <InputField
            label='organization'
            value={experience[1].organization}
            handleChange={this.props.handleExperienceChange}
            arrayId='2'
          />
          <InputField
            label='startDate'
            value={experience[1].startDate}
            handleChange={this.props.handleExperienceChange}
            arrayId='2'
          />
          <InputField
            label='endDate'
            value={experience[1].endDate}
            handleChange={this.props.handleExperienceChange}
            arrayId='2'
          />
          <InputField
            label='description'
            value={experience[0].description}
            handleChange={this.props.handleExperienceChange}
            arrayId='2'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
