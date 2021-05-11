import './ExperienceItem.css';

interface Props {
  heading: string;
  place: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

function ExperienceItem({ heading, place, startDate, endDate, desc }: Props) {
  return (
    <div className='experience'>
      <div className='experience__heading'>
        <h4>{heading}</h4>
        <div className='experience__details'>
          {place} |{' '}
          <span className='bold'>
            {startDate} – {endDate}
          </span>
        </div>
      </div>
      {desc ? desc : null}
    </div>
  );
}

export default ExperienceItem;
