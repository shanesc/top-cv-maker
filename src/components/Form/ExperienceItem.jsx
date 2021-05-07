import InputField from './InputField';

function ExperienceItem(props) {
  const { position, company, desc } = props.item;
  const { handleInputChange, handleDelClick } = props;
  return (
    <div>
      <InputField
        id='position-input'
        label='position'
        name='position'
        value={position}
        handleChange={handleInputChange}
      />
      <InputField
        id='company-input'
        label='company'
        name='company'
        value={company}
        handleChange={handleInputChange}
      />
      <InputField
        id='desc-input'
        label='desc'
        name='desc'
        value={desc}
        handleChange={handleInputChange}
      />
      <button type='button' onClick={handleDelClick}>
        Delete
      </button>
    </div>
  );
}

export default ExperienceItem;
