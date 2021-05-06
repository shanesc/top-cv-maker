import { Component } from 'react';
import Form from './components/Form/Form';
import View from './components/View/View';

class App extends Component {
  constructor() {
    super();

    this.state = {
      bio: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: ''
      }
    };
  }

  handleChange = (key, e) => {
    this.setState({
      bio: { ...this.state.bio, [key]: e.target.value }
    });
  };

  render() {
    return (
      <div>
        <Form state={this.state} handleChange={this.handleChange} />
        <View bio={this.state.bio} />
      </div>
    );
  }
}

export default App;
