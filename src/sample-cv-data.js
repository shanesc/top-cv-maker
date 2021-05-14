import { v4 as uuidv4 } from 'uuid';

const data = {
  personal: {
    name: 'John Doeman',
    title: 'Software Developer',
    phone: '01234 567890',
    email: 'doeman@gmail.com',
    location: 'Bristol, UK'
  },
  description:
    'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.',
  experience: [
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'A Software Company',
      startDate: '2018',
      endDate: 'Present',
      desc: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'
    },
    {
      id: uuidv4(),
      position: 'Graduate Engineer',
      company: 'My First Company',
      startDate: '2017',
      endDate: '2018',
      desc: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.'
    },
    {
      id: uuidv4(),
      position: 'Tutor',
      company: 'University',
      startDate: '2015',
      endDate: '2017',
      desc: 'Enim elit aliquip fugiat anim proident.'
    }
  ],
  education: [
    {
      id: uuidv4(),
      course: 'CS50: Introduction to Computer Science',
      university: 'Harvard University',
      startDate: '2020',
      endDate: 'Present'
    },
    {
      id: uuidv4(),
      course: 'Fullstack JavaScript',
      university: 'The Odin Project',
      startDate: '2019',
      endDate: 'Present'
    }
  ]
};

export default data;
