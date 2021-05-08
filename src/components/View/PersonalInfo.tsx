import ContactDetails from './ContactDetails';
import phoneIcon from '../../phone-square-solid.svg';
import emailIcon from '../../envelope-square-solid.svg';
import locationIcon from '../../map-marker-alt-solid.svg';
import './PersonalInfo.css';

interface Props {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
}

function PersonalInfo({ name, title, phone, email, location }: Props) {
  return (
    <header>
      <div className='heading'>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className='details-group'>
        <ContactDetails text={phone} icon={phoneIcon} />
        <ContactDetails text={email} icon={emailIcon} />
        <ContactDetails text={location} icon={locationIcon} />
      </div>
    </header>
  );
}

export default PersonalInfo;
