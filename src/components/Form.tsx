import InputField from './InputField';
import './Form.css';
import { State } from '../models/interface-models';
import React from 'react';

interface Props extends State {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Form({
  personalDetails,
  description,
  experience,
  education,
  onChange
}: Props) {
  const { name, title, phone, email, location } = personalDetails;
  return (
    <form>
      <section>
        <h2>Personal Details</h2>
        <InputField label='name' value={name} onChange={onChange} />
        <InputField label='title' value={title} onChange={onChange} />
        <InputField label='phone' value={phone} onChange={onChange} />
        <InputField label='email' value={email} onChange={onChange} />
        <InputField label='location' value={location} onChange={onChange} />
        <textarea
          id='input--description'
          rows={5}
          placeholder='Description...'
          value={description}
        ></textarea>
      </section>
      <section>
        <h2>Work Experience</h2>
        <InputField label='company' value='test' />
        <InputField label='position' value='test' />
        <InputField label='start date' value='test' />
        <InputField label='end date' value='test' />
        <InputField label='description' value='test' />
      </section>
      <section>
        <h2>Education</h2>
        <InputField label='course / program' id='input--course' value='test' />
        <InputField label='university' value='test' />
        <InputField label='start date' value='test' />
        <InputField label='end date' value='test' />
        <InputField label='description' value='test' />
      </section>
    </form>
  );
}

export default Form;
