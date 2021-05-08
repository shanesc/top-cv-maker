import './ContactDetails.css';

interface Props {
  icon?: string;
  text: string;
}

function ContactDetails({ icon, text }: Props) {
  return (
    <div className='contact-details'>
      {icon ? <img src={icon} alt='icon' /> : null}
      <span className='details-text'>{text}</span>
    </div>
  );
}

export default ContactDetails;
