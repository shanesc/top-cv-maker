import ExperienceItem from './ExperienceItem';

interface Item {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

interface Props {
  experienceList: Item[];
}

function ExperienceList({ experienceList }: Props) {
  return (
    <div>
      {experienceList.map((item) => {
        const { position, company, startDate, endDate, desc } = item;
        return (
          <ExperienceItem
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
