import InputField from '../InputField';
import './Form.css';

function Form() {
  return (
    <form>
      <section>
        <h2>Personal Details</h2>
        <InputField label='name' />
        <InputField label='title' />
        <InputField label='phone' />
        <InputField label='email' />
        <InputField label='location' />
        <textarea
          id='input--description'
          rows={5}
          placeholder='Description...'
        ></textarea>
      </section>
      <section>
        <h2>Work Experience</h2>
        <InputField label='name' />
        <InputField label='title' />
        <InputField label='phone' />
        <InputField label='email' />
        <InputField label='location' />
      </section>
    </form>
  );
}

export default Form;
