import { Component } from 'react';
import data from './sample-cv-data';
import PersonalInfo from './components/View/PersonalInfo';
import './App.css';
import ExperienceItem from './components/View/ExperienceItem';

const { personal, experience: experienceList } = data;

class App extends Component {
  render() {
    return (
      <div className='cv-container'>
        <PersonalInfo {...personal} />
        {experienceList.map((item) => {
          const { position, company, startDate, endDate, desc } = item;
          return (
            <ExperienceItem
              heading={position}
              place={company}
              startDate={startDate}
              endDate={endDate}
              desc={desc}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
