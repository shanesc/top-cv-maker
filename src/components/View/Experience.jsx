import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header.css';

function Experience(props) {
  const {
    title,
    organization,
    startDate,
    endDate,
    description
  } = props.experience;
  return (
    <div>
      <h2>Title</h2>
      <div className='container'>
        <span>{title}</span>
        <span>{organization}</span>
        <span>{startDate}</span>
        <span>{endDate}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

Experience.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string
};

export default Experience;
