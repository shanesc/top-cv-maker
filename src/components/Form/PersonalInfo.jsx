import React from 'react';
import InputField from './InputField';
import '../../styles/PersonalInfo.css';

function PersonalInfo(props) {
  const { name, title, location } = props.info;
  return (
    <div className='form-field'>
      <h2>Personal Info</h2>
      <InputField id='name-input' label='name' value={name} />
      <InputField id='title-input' label='title' value={title} />
      <InputField id='location-input' label='location' value={location} />
    </div>
  );
}

export default PersonalInfo;
