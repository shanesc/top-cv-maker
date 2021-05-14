import InputField from './InputField';
import ExperienceInputGroup from './ExperienceInputGroup';
import EducationInputGroup from './EducationInputGroup';
import './Form.css';
import { State } from '../models/interface-models';
import React from 'react';

interface Props extends State {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputArrayChange: (
    property: 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onItemDelete: (property: 'experience' | 'education', id: number) => void;
}

function Form({
  personalDetails,
  description,
  experience,
  education,
  onInputChange,
  onInputArrayChange,
  onTextAreaChange,
  onItemDelete
}: Props) {
  const { name, title, phone, email, location } = personalDetails;
  return (
    <form>
      <section>
        <h2>Personal Details</h2>
        <div className='group'>
          <InputField
            label='name'
            value={name}
            name='name'
            onChange={onInputChange}
          />
          <InputField
            label='title'
            value={title}
            name='title'
            onChange={onInputChange}
          />
          <InputField
            label='phone'
            value={phone}
            name='phone'
            onChange={onInputChange}
          />
          <InputField
            label='email'
            value={email}
            name='email'
            onChange={onInputChange}
          />
          <InputField
            label='location'
            value={location}
            name='location'
            onChange={onInputChange}
          />
          <textarea
            id='description'
            rows={5}
            placeholder='Description...'
            value={description}
            onChange={onTextAreaChange}
          ></textarea>
        </div>
      </section>
      <section>
        <h2>Work Experience</h2>
        {experience.map((item, index) => {
          return (
            <ExperienceInputGroup
              key={index}
              item={item}
              index={index}
              onInputArrayChange={onInputArrayChange}
              onItemDelete={onItemDelete}
            />
          );
        })}
      </section>
      <section>
        <h2>Education</h2>
        {education.map((item, index) => {
          return (
            <EducationInputGroup
              key={index}
              item={item}
              index={index}
              onInputArrayChange={onInputArrayChange}
              onItemDelete={onItemDelete}
            />
          );
        })}
      </section>
    </form>
  );
}

export default Form;
