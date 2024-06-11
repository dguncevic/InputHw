import { Input, Button, Row, Col, Table } from "antd"
import { useState } from "react";
import { COLUMNS } from "./Columns";
import Form from "./components/Form";


function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  const [formList, setFormlist] = useState<any>([]);


  const handleFirstnameInput = (event: any) => {
    setFirstname(event.target.value);
  }

  const handleLastnameInput = (event: any) => {
    setLastname(event.target.value);
  }

  const handleDobInput = (event: any) => {
    setDob(event.target.value);
  }

  const handleButtonClick = () => {

    if (!firstname) {
      console.log("FIRSTNAME JE PRAZAN: ", !firstname);
      return;
    }
    let submitObject = {
      firstname,
      lastname,
      dob,
      key: new Date()
    }
    console.log('submit object', submitObject);
    setFormlist([...formList, submitObject]);
    setFirstname('');
    setLastname('');
    setDob('');

  }

  const handleClearAllClick = () => {
    setFormlist([]);
    setFirstname('');
    setLastname('');
    setDob('');
  }

  const handleRowClicked = (record: any) => {
    console.log('Clicked row: ', record.key.getTime());
    console.log(formList.length, ': length formLista');

    for (let i = 0; i < formList.length; i++) {

      console.log(i + 1, '. clan arrayja: ', formList[i].key.getTime());
      if (formList[i].key.getTime() === record.key.getTime()) {
        console.log('Brisem red sa id-jem: ', record.key.getTime());
        //Spreadam postojecu listu i iz nje rezem prepoznati član arraya
        const updatedFormlist = [...formList];
        updatedFormlist.splice(i, 1);
        setFormlist(updatedFormlist);
        console.log('Nova lista u memoriji: ', updatedFormlist);
        break;
      }
    }

    /* //Logika za brisanje reda na dodir s obzirom kakav mu je key
    const indexToRemove = formList.findIndex((item: { key: { getTime: () => any; }; }) => item.key.getTime() === record.key.getTime());
    if (indexToRemove !== -1) {
      const updatedFormList = [...formList];
      updatedFormList.splice(indexToRemove, 1);
      setFormlist(updatedFormList);
    } */
  }

  return <>
    <form>
      <Row>
        <Col>
          <Input value={firstname} onChange={handleFirstnameInput} type="text" placeholder="Ime">
          </Input>
          <Input value={lastname} onChange={handleLastnameInput} type="text" placeholder="Prezime">
          </Input>
          <Input value={dob} onChange={handleDobInput} type="text" placeholder="Date Of Birth">
          </Input>
          <Button onClick={handleButtonClick}>Submit</Button>
          <Button onClick={handleClearAllClick}>Clear all</Button>
        </Col>
        <Col span={12}>
          <Table columns={COLUMNS} dataSource={formList} onRow={(record) => ({ onClick: () => handleRowClicked(record) })}></Table>
        </Col>
      </Row>
    </form>
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    
  </>
}
export default App;