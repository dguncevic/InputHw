const handleRowClicked = (event: any) => {
  console.log(event.target.value);
}

export const COLUMNS = [

  {
    title: 'Firstname',
    dataIndex: 'firstname',
    key: 'firstname',
  },
  {
    title: 'Lastname',
    dataIndex: 'lastname',
    key: 'lastname'
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
  },
];
