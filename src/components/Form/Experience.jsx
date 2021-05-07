import React from 'react';
import InputField from './InputField';
import '../../styles/PersonalInfo.css';

function PersonalInfo(props) {
  const { position, company, desc } = props.info;
  return (
    <div className='form-field'>
      <h2>Experience</h2>
      <InputField id='position-input' label='position' value={position} />
      <InputField id='company-input' label='company' value={company} />
      <InputField id='desc-input' label='desc' value={desc} />
      <button>Add</button>
      <button>Delete</button>
    </div>
  );
}

export default PersonalInfo;
