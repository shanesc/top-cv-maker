import React, { Component, ReactEventHandler } from 'react';
import data from './sample-cv-data';
import PersonalInfo from './components/View/PersonalInfo';
import './App.css';
import ExperienceList from './components/View/ExperienceList';
import Form from './components/Form';
import { State } from './models/interface-models';

class App extends Component<{}, State> {
  constructor() {
    super({});

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

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const personalDetails = {
      ...this.state.personalDetails,
      [name]: value
    };

    this.setState((prevState) => ({
      ...prevState,
      personalDetails
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
      <>
        <div className='cv-form'>
          <Form {...this.state} onChange={this.handleInputChange} />
        </div>
        <div className='cv-container'>
          <PersonalInfo {...personalDetails} />
          <div>{description}</div>
          <ExperienceList
            heading='work experience'
            experienceList={experienceList}
          />
          <ExperienceList heading='education' experienceList={educationList} />
        </div>
      </>
    );
  }
}

export default App;
