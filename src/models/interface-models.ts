export interface PersonalDetails {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

export interface Education {
  id: string;
  course: string;
  university: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

export interface State {
  personalDetails: PersonalDetails;
  description: string;
  experience: Experience[];
  education: Education[];
}
