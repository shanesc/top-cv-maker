import { Component } from 'react';
import data from './sample-cv-data';
import PersonalInfo from './components/View/PersonalInfo';
import './App.css';
import ExperienceList from './components/View/ExperienceList';

const { personal, experience: experienceList } = data;
const educationList = data.education.map((item) => {
  return {
    position: item.course,
    company: item.university,
    startDate: item.startDate,
    endDate: item.endDate
  };
});

class App extends Component {
  render() {
    return (
      <div className='cv-container'>
        <PersonalInfo {...personal} />
        <ExperienceList
          heading='work experience'
          experienceList={experienceList}
        />
        <ExperienceList heading='education' experienceList={educationList} />
      </div>
    );
  }
}

export default App;
