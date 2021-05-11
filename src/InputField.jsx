function InputField(props) {
  const {
    label
    // value,
    // id,
    // name,
    // handleChange = () => console.log(value)
  } = props;
  return (
    <label htmlFor={`input--${label}`}>
      <span className='hidden'>{label}</span>
      <input
        type='text'
        id={label}
        placeholder={label}
        // value={value}
        // name={name}
        // onChange={handleChange}
      />
    </label>
  );
}

export default InputField;
