interface Props {
  label: string;
  value: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ label, value, id, onChange }: Props) {
  if (!id) {
    id = `input--${label.split(' ').join('-')}`;
  }

  return (
    <label htmlFor={id}>
      <span className='hidden'>{label}</span>
      <input
        type='text'
        id={id}
        value={value}
        placeholder={label}
        name={label}
        onChange={onChange}
      />
    </label>
  );
}

export default InputField;
