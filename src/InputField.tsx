interface Props {
  label: string;
  id?: string;
}

function InputField({ label, id }: Props) {
  if (!id) {
    id = `input--${label.split(' ').join('-')}`;
  }

  return (
    <label htmlFor={id}>
      <span className='hidden'>{label}</span>
      <input type='text' id={id} placeholder={label} />
    </label>
  );
}

export default InputField;
