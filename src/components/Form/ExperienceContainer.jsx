import React, { Component } from 'react';
import '../../styles/PersonalInfo.css';
import ExperienceItem from './ExperienceItem';

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

  handleInputChange = (id) => {
    return (e) => {
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
    return () => {
      const experience = this.state.experience;
      const newExpState = experience.filter((item) => {
        return item.id === id ? false : true;
      });

      this.setState({
        experience: newExpState
      });
    };
  };

  render() {
    return (
      <div className='form-field'>
        <h2>Experience</h2>
        {this.state.experience.map((item) => {
          const { id } = item;
          return (
            <ExperienceItem
              key={id}
              item={item}
              handleInputChange={this.handleInputChange(id)}
              handleDelClick={this.handleDelClick(id)}
            />
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
