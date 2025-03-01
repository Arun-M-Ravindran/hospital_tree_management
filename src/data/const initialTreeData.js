const initialTreeData = {
  id: 'root',
  name: 'Clinician Groups',
  children: [
    {
      id: 'hospital-a',
      name: 'Hospital A',
      children: [
        { id: 'shoulder', name: 'Shoulder', children: [] },
        { id: 'knee', name: 'Knee', children: [] },
      ],
    },
    {
      id: 'hospital-b',
      name: 'Hospital B',
      children: [
        { id: 'gambling', name: 'Gambling addiction', children: [] },
        { id: 'anxiety', name: 'Anxiety', children: [] },
        { id: 'depression', name: 'Depression', children: [] },
      ],
    },
  ],
};

export default initialTreeData;