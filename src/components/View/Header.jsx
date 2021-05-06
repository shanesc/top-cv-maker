import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { name, title, phone, email, location } = props.bio;
  return (
    <div>
      <h2>Title</h2>
      {name}
      {title}
      {phone}
      {email}
      {location}
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
