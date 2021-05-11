import { Component } from 'react';
import data from './sample-cv-data';
import PersonalInfo from './components/View/PersonalInfo';
import './App.css';
import ExperienceList from './components/View/ExperienceList';
import Form from './components/Form';

interface PersonalDetails {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
}

interface Experience {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

interface Education {
  id: number;
  course: string;
  university: string;
  startDate: string;
  endDate: string;
  desc?: string;
}
interface State {
  personalDetails: PersonalDetails;
  description: string;
  experience: Experience[];
  education: Education[];
}

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
          <Form />
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
