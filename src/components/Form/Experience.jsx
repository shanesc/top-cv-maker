import React, { Component } from 'react';
import InputField from './InputField';
import '../../styles/PersonalInfo.css';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experience: [
        {
          id: 1,
          position: '',
          company: '',
          desc: ''
        },
        {
          id: 2,
          position: '',
          company: '',
          desc: ''
        }
      ]
    };
  }

  handleInputChange = (e, id) => {
    const target = e.target;
    const { name, value } = target;

    const newExpState = this.state.experience.map((item) => {
      if (item.id === id) {
        item[name] = value;
      }
      return item;
    });
    this.setState({
      experience: newExpState
    });
  };

  handleAddClick = () => {
    const experience = this.state.experience;
    const newExpState = [
      ...experience,
      {
        id: experience.length + 1,
        position: '',
        company: '',
        desc: ''
      }
    ];

    this.setState({
      experience: newExpState
    });
  };

  handleDelClick = (id) => {
    const experience = this.state.experience;
    const newExpState = experience.filter((item) => {
      return item.id === id ? false : true;
    });

    this.setState({
      experience: newExpState
    });
  };

  render() {
    return (
      <div className='form-field'>
        <h2>Experience</h2>
        {this.state.experience.map((item) => {
          const { position, company, desc, id } = item;
          return (
            <div key={id}>
              <InputField
                id='position-input'
                label='position'
                name='position'
                value={position}
                handleChange={(e) => this.handleInputChange(e, id)}
              />
              <InputField
                id='company-input'
                label='company'
                name='company'
                value={company}
                handleChange={(e) => this.handleInputChange(e, id)}
              />
              <InputField
                id='desc-input'
                label='desc'
                name='desc'
                value={desc}
                handleChange={(e) => this.handleInputChange(e, id)}
              />
              <button
                type='button'
                onClick={(e) => {
                  this.handleDelClick(id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button type='button' onClick={this.handleAddClick}>
          Add
        </button>
      </div>
    );
  }
}

export default Experience;
