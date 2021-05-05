import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
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

  static propTypes = {};

  sentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.bio);
  };

  handleChange = (key, e) => {
    this.setState({
      bio: { ...this.state.bio, [key]: e.target.value }
    });
  };

  render() {
    const { bio } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {Object.entries(bio).map((property) => {
          const key = property[0];
          return (
            <label key={key} htmlFor={`bio-${key}`}>
              {this.sentenceCase(key)}:
              <input
                type='text'
                id={`bio-${key}`}
                value={bio[key]}
                onChange={(e) => this.handleChange(key, e)}
              />
            </label>
          );
        })}
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
