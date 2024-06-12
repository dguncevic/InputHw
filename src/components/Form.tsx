import { Button, Input, Row, Col, Table, Modal } from "antd"
import { useState } from "react";
import { COLUMNS } from "../Columns";

function Form() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dob, setDob] = useState('');
    const [formList, setFormlist] = useState<any>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = (event: any) => {
        let updatedObj = {
            firstname,
            lastname,
            dob
        }
        let foundId: number = 0;
        for (let i = 0; i < formList.length; i++) {
            if (id === formList[i].key.getTime()) {
                console.log(i);
                foundId = i;
            }
        }
        formList[foundId] = updatedObj;
        setFormlist(formList);
    }

    const handleCancel = (event: any) => {
        INIT_VALUES();
        setIsModalOpen(false);
    }


    const handleFirstnameInput = (event: any) => {
        setFirstname(event.target.value);
    }

    const handleLastnameInput = (event: any) => {
        setLastname(event.target.value);
    }

    const handleDobInput = (event: any) => {
        setDob(event.target.value);
    }
    const INIT_VALUES = () => {
        setFirstname(''),
            setLastname(''),
            setDob('')
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
        INIT_VALUES();
    }

    const handleClearAllClick = () => {
        setFormlist([]);
        setFirstname('');
        setLastname('');
        setDob('');
    }

    const handleRowClicked = (record: any, event: any) => {
        console.log('Clicked row: ', record.key.getTime());
        console.log(formList.length, ': length formLista');
        console.log(formList);

        const clickedAction = event.target.text;

        console.log(clickedAction);
        if (clickedAction === ('Update ' + record.firstname)) {
            console.log('Stisao si update');
            setIsModalOpen(true);
            setFirstname(record.firstname);
            setLastname(record.lastname);
            setDob(record.dob);



        } else if (clickedAction === 'Delete') {
            console.log('Stiso si delete');
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
        }
    }
    return (

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
                    <Table columns={COLUMNS} dataSource={formList} onRow={(record) => ({ onClick: (event) => handleRowClicked(record, event) })}></Table>
                </Col>
                <Modal onOk={handleOk} onCancel={handleCancel} open={isModalOpen}>
                    <Input value={firstname} onChange={handleFirstnameInput} type="text" placeholder="Ime">
                    </Input>
                    <Input value={lastname} onChange={handleLastnameInput} type="text" placeholder="Prezime">
                    </Input>
                    <Input value={dob} onChange={handleDobInput} type="text" placeholder="Date Of Birth">
                    </Input>
                </Modal>
            </Row>
        </form >

    );

}
export default Form;