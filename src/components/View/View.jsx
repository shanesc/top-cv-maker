import React, { Component } from 'react';
import Header from './Header';
import Experience from './Experience';
import '../../styles/View.css';

export class View extends Component {
  render() {
    return (
      <section className='view-container'>
        <Header bio={this.props.bio} />
        <Experience experience={this.props.experience[0]} />
        <Experience experience={this.props.experience[1]} />
      </section>
    );
  }
}

export default View;
