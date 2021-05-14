import { Experience } from '../models/interface-models';
import InputField from './InputField';

interface Props {
  item: Experience;
  index: number;
  onInputArrayChange: (
    property: 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onItemDelete: (property: 'experience' | 'education', id: string) => void;
  onItemAdd: () => void;
}

function ExperienceInputGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd
}: Props) {
  const { id, company, position, startDate, endDate, desc } = item;
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
      <div className='btn-group'>
        <button type='button' onClick={() => onItemDelete('experience', id)}>
          Delete
        </button>
        <button type='button' className='btn--add' onClick={onItemAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ExperienceInputGroup;
