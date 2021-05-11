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
        <InputField label='company' />
        <InputField label='position' />
        <InputField label='start date' />
        <InputField label='end date' />
        <InputField label='description' />
      </section>
      <section>
        <h2>Education</h2>
        <InputField label='course / program' id='input--course' />
        <InputField label='university' />
        <InputField label='start date' />
        <InputField label='end date' />
        <InputField label='description' />
      </section>
    </form>
  );
}

export default Form;
