import { Education } from '../models/interface-models';
import InputField from './InputField';

interface Props {
  item: Education;
  index: number;
  onInputArrayChange: (
    property: 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onItemDelete: (property: 'experience' | 'education', id: string) => void;
  onItemAdd: () => void;
}

function EducationInputGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd
}: Props) {
  const { id, course, university, startDate, endDate, desc } = item;
  return (
    <div key={index} className='group'>
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
      <InputField
        label='description'
        value={desc || ''}
        name='desc'
        onChange={onInputArrayChange('education', index)}
      />
      <div className='btn-group'>
        <button type='button' onClick={() => onItemDelete('education', id)}>
          Delete
        </button>
        <button type='button' className='btn--add' onClick={onItemAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default EducationInputGroup;
