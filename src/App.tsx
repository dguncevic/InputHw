import { Input, Button, Row, Col, Table } from "antd"
import { useState } from "react";
import { COLUMNS } from "./Columns";


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
        </Col>
        <Col span={12}>
          <Table columns={COLUMNS} dataSource={formList}></Table>
        </Col>
      </Row>
    </form>
  </>
}
export default App;