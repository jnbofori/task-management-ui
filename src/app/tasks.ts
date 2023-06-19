export interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
}

export const tasks = [
  {
    _id: '1',
    title: 'Do laundry',
    description: 'Do all laundry from week ago',
    status: 'pending'
  },
  {
    _id: '2',
    title: 'Change car oil',
    description: 'Need to get oil changed as soon as possible',
    status: 'pending'
  },
  {
    _id: '3',
    title: 'Complete test project',
    description: 'Assignment for test needs to be done before thursday',
    status: 'completed'
  },
];