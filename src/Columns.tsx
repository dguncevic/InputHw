import { Space } from "antd";

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
  {
    title: 'Action',
    key: 'action',
    render: (record: any) => (
      <Space size="middle" >
        <a>Update {record.firstname}</a>
        <a>Delete</a>
      </Space>
    )
  }
];
