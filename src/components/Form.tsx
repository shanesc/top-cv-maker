import InputField from './InputField';
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
}

function Form({
  personalDetails,
  description,
  experience,
  education,
  onInputChange,
  onInputArrayChange,
  onTextAreaChange
}: Props) {
  const { name, title, phone, email, location } = personalDetails;
  return (
    <form>
      <section>
        <h2>Personal Details</h2>
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
      </section>
      <section>
        <h2>Work Experience</h2>
        {experience.map((item, index) => {
          const { company, position, startDate, endDate, desc } = item;
          return (
            <div>
              <InputField
                label='company'
                value={company}
                name='company'
                onChange={onInputArrayChange('experience', index)}
              />
              <InputField
                label='position'
                value={position}
                name='position'
                onChange={onInputArrayChange('experience', index)}
              />
              <InputField
                label='start date'
                value={startDate}
                name='startDate'
                onChange={onInputArrayChange('experience', index)}
              />
              <InputField
                label='end date'
                value={endDate}
                name='endDate'
                onChange={onInputArrayChange('experience', index)}
              />
              {desc ? (
                <InputField
                  label='description'
                  value={desc}
                  name='desc'
                  onChange={onInputArrayChange('experience', index)}
                />
              ) : null}
            </div>
          );
        })}
      </section>
      <section>
        <h2>Education</h2>
        {education.map((item, index) => {
          const { course, university, startDate, endDate, desc } = item;
          return (
            <div>
              <InputField
                label='course / program'
                id='input--course'
                value={course}
                name='course'
                onChange={onInputArrayChange('education', index)}
              />
              <InputField
                label='university'
                value={university}
                name='university'
                onChange={onInputArrayChange('education', index)}
              />
              <InputField
                label='start date'
                value={startDate}
                name='startDate'
                onChange={onInputArrayChange('education', index)}
              />
              <InputField
                label='end date'
                value={endDate}
                name='endDate'
                onChange={onInputArrayChange('education', index)}
              />
              {desc ? (
                <InputField
                  label='description'
                  value={desc}
                  name='desc'
                  onChange={onInputArrayChange('education', index)}
                />
              ) : null}
            </div>
          );
        })}
      </section>
    </form>
  );
}

export default Form;
