import React, { Component } from 'react';
import data from './sample-cv-data';
import PersonalInfo from './components/View/PersonalInfo';
import './App.css';
import ExperienceItem from './components/View/ExperienceItem';
import ExperienceList from './components/View/ExperienceList';

const { personal, experience: experienceList } = data;

class App extends Component {
  render() {
    return (
      <div className='cv-container'>
        <PersonalInfo {...personal} />
        <ExperienceList experienceList={experienceList} />
      </div>
    );
  }
}

export default App;
