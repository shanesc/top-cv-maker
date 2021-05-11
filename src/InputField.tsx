interface Props {
  label: string;
}

function InputField({ label }: Props) {
  const labelID = `input--${label.split(' ').join('-')}`;

  return (
    <label htmlFor={labelID}>
      <span className='hidden'>{label}</span>
      <input type='text' id={labelID} placeholder={label} />
    </label>
  );
}

export default InputField;
