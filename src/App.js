import { Component } from 'react';
import Form from './components/Form/Form';
import View from './components/View/View';

class App extends Component {
  // handleExperienceChange = (id, key, e) => {
  //   const updatedStateArray = this.state.experience.map((item) => {
  //     if (item.id === id) {
  //       item[key] = e.target.value;
  //     }
  //     return item;
  //   });
  //   this.setState({
  //     experience: updatedStateArray
  //   });
  // };

  render() {
    return (
      <div>
        <Form
        // state={this.state}
        // handleBioChange={this.handleBioChange}
        // handleExperienceChange={this.handleExperienceChange}
        />
        {/* <View bio={this.state.bio} experience={this.state.experience} /> */}
      </div>
    );
  }
}

export default App;
