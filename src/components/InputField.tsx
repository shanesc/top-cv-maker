interface Props {
  label: string;
  value: string;
  name: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ label, value, id, name, onChange }: Props) {
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
        name={name}
        onChange={onChange}
      />
    </label>
  );
}

export default InputField;
