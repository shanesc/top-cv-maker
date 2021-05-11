function InputField(props) {
  const {
    label
    // value,
    // id,
    // name,
    // handleChange = () => console.log(value)
  } = props;
  const labelID = `input--${label.split(' ').join('-')}`;

  return (
    <label htmlFor={labelID}>
      <span className='hidden'>{label}</span>
      <input
        type='text'
        id={labelID}
        placeholder={label}
        // value={value}
        // name={name}
        // onChange={handleChange}
      />
    </label>
  );
}

export default InputField;
