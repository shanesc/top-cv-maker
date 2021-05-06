import React, { Component } from 'react';
import Header from './Header';
import '../../styles/View.css';

export class View extends Component {
  render() {
    return (
      <section className='view-container'>
        <Header bio={this.props.bio} />
        <Header bio={this.props.bio} />
        <Header bio={this.props.bio} />
      </section>
    );
  }
}

export default View;
