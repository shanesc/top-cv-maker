import ExperienceItem from './ExperienceItem';
import './ExperienceList.css';
interface Item {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

interface Props {
  heading: string;
  experienceList: Item[];
}

function ExperienceList({ heading, experienceList }: Props) {
  return (
    <div className='experience-list'>
      {heading ? <h3>{heading}</h3> : null}
      {experienceList.map((item, index) => {
        const { position, company, startDate, endDate, desc } = item;
        return (
          <ExperienceItem
            key={index}
            heading={position}
            place={company}
            startDate={startDate}
            endDate={endDate}
            desc={desc}
          />
        );
      })}
    </div>
  );
}

export default ExperienceList;
