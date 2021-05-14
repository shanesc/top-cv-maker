import React, { Component } from 'react';
import data from './sample-cv-data';
import PersonalInfo from './components/View/PersonalInfo';
import './App.css';
import ExperienceList from './components/View/ExperienceList';
import Form from './components/Form';
import { State } from './models/interface-models';

class App extends Component<{}, State> {
  constructor(props = {}) {
    super(props);

    this.state = {
      personalDetails: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: ''
      },
      description: '',
      experience: [],
      education: []
    };
  }

  componentDidMount() {
    const { personal, description, experience, education } = data;
    this.setState((prevState) => ({
      ...prevState,
      personalDetails: personal,
      description,
      experience,
      education
    }));
  }

  handleInputArrayChange = (
    property: 'experience' | 'education',
    index: number
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      this.setState((prevState) => ({
        ...prevState,
        [property]: [
          ...prevState[property].slice(0, index),
          {
            ...prevState[property][index],
            [name]: value
          },
          ...prevState[property].slice(index + 1)
        ]
      }));
    };
  };

  handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      description: value
    }));
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value
      }
    }));
  };

  render() {
    const {
      personalDetails,
      description,
      experience: experienceList,
      education
    } = this.state;

    const educationList = education.map((item) => {
      return {
        position: item.course,
        company: item.university,
        startDate: item.startDate,
        endDate: item.endDate
      };
    });

    return (
      <div className='cv__container'>
        <div className='cv__form'>
          <Form
            {...this.state}
            onInputChange={this.handleInputChange}
            onInputArrayChange={this.handleInputArrayChange}
            onTextAreaChange={this.handleTextAreaChange}
          />
        </div>
        <div className='cv__view'>
          <PersonalInfo {...personalDetails} />
          {description ? <div>{description}</div> : null}
          <ExperienceList
            heading='work experience'
            experienceList={experienceList}
          />
          <ExperienceList heading='education' experienceList={educationList} />
        </div>
      </div>
    );
  }
}

export default App;
