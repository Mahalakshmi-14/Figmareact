import {
  Col,
  Row,
  Card,
  Button,
  Avatar,
  Image,
  Modal,
  Input,
  Form,
} from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "../Cards/Cards.css";
import img1 from "../Images/L1.svg";
const { TextArea } = Input;
// import "../Imageselector/Form.css";

type cardtype = {
  name: string;
  designation: string;
  employeedetails: string;
  // info2: string;
  // image: string;
};

const Cards = (props: cardtype) => {
  const [modal2Visible, setModal2Visible] = useState(false);
  const [Employeename, setEmployeename] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Employeedetails, setEmployeedetails] = useState("");
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
          <div className="site-card-border-less-wrapper ">
            <Card className="card-width">
              <div className="card-one">
                <div style={{ marginRight: "30px" }}>
                  <img src={img1} width={40} className="avatar"></img>
                </div>

                <div className="cardhover1">
                  <span className="title">{props.name}</span>
                  <br></br>
                  <span className="description"> {props.designation}</span>
                  <br></br>
                  <br></br>
                  <p className="info1">{props.employeedetails}</p>
                </div>
              </div>
              <div className="hover-effect">
                <span className="hover-effect-para">
                  This workflow is to enable an employee raise his leave request
                  and get it approved it from him reporting manager
                </span>
                <br></br>
                <span>
                  <Button className="deletebtn">Delete</Button>
                </span>
                <Button
                  className="viewdetailsbtn"
                  type="primary"
                  onClick={() => setModal2Visible(true)}
                >
                  View details
                </Button>
                {/* <Button>Delete</Button> */}
                <Modal
                  className="modalpopup"
                  centered
                  visible={modal2Visible}
                  onOk={() => setModal2Visible(false)}
                  onCancel={() => setModal2Visible(false)}
                  footer={null}
                >
                  <div className="card-one">
                    <div style={{ marginRight: "30px" }}>
                      <img src={img1} width={40} className="avatar"></img>
                    </div>

                    <div className="cardhover1">
                      <span className="title">{props.name}</span>
                      <br></br>
                      <span className="description"> {props.designation}</span>
                      <br></br>
                      <br></br>
                      <p className="info1">{props.employeedetails}</p>
                    </div>
                  </div>
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                  >
                    <Form.Item label="Employee Name">
                      <Input
                        className="Inputfield"
                        value={props.name}
                        // onChange={(e) => setEmployeename(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Designation">
                      <Input
                        className="Inputfield"
                        value={props.designation}
                        // onChange={(e) => setDesignation(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item className="empdetails" label="Employee Details">
                      <TextArea
                        rows={4}
                        className="Inputfield1"
                        value={props.employeedetails}
                        // onChange={(e) => setEmployeedetails(e.target.value)}
                      />
                    </Form.Item>

                    <Button>Cancel</Button>
                    <span>
                      <Button type="primary">Edit</Button>
                    </span>
                  </Form>
                </Modal>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Cards;
