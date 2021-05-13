import { Experience } from '../models/interface-models';
import InputField from './InputField';

interface Props {
  item: Experience;
  index: number;
  onInputArrayChange: (
    property: 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ExperienceInputGroup({ item, index, onInputArrayChange }: Props) {
  const { company, position, startDate, endDate, desc } = item;
  return (
    <div className='group'>
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

      <InputField
        label='description'
        value={desc || ''}
        name='desc'
        onChange={onInputArrayChange('experience', index)}
      />
    </div>
  );
}

export default ExperienceInputGroup;
