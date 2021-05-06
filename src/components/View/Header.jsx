import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header.css';

function Header(props) {
  const { name, title, phone, email, location } = props.bio;
  return (
    <div>
      <div className='container'>
        <span>{name}</span>
        <span>{title}</span>
        <span>{phone}</span>
        <span>{email}</span>
        <span>{location}</span>
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string
};

export default Header;
