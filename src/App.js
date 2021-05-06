import { Component } from 'react';
import Form from './components/Form';

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
    console.log(this.state.bio);
  };

  render() {
    return (
      <div>
        <Form state={this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
