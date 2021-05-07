import { Component } from 'react';
import Form from './components/Form/Form';
import View from './components/View/View';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        name: '',
        title: '',
        location: ''
      },
      experience: [
        {
          id: 1,
          position: '',
          company: '',
          description: ''
        },
        {
          id: 2,
          position: '',
          company: '',
          description: ''
        }
      ]
    };
  }

  handleBioChange = (id, key, e) => {
    this.setState({
      bio: { ...this.state.bio, [key]: e.target.value }
    });
  };

  handleExperienceChange = (id, key, e) => {
    const updatedStateArray = this.state.experience.map((item) => {
      if (item.id === id) {
        item[key] = e.target.value;
      }
      return item;
    });
    this.setState({
      experience: updatedStateArray
    });
  };

  render() {
    return (
      <div>
        <Form
          state={this.state}
          // handleBioChange={this.handleBioChange}
          // handleExperienceChange={this.handleExperienceChange}
        />
        {/* <View bio={this.state.bio} experience={this.state.experience} /> */}
      </div>
    );
  }
}

export default App;
