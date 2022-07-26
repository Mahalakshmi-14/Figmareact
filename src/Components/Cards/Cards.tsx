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
import { constants } from "buffer";
const { TextArea } = Input;
// import "../Imageselector/Form.css";

type cardtype = {
  id: any;
  name: string;
  designation: string;
  employeedetails: string;
  refresh: any;
};

const Cards = (props: cardtype) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Employeename, setEmployeename] = useState(props.name);
  const [Designation, setDesignation] = useState(props.designation);
  const [Employeedetails, setEmployeedetails] = useState(props.employeedetails);

  const EditFun = () => {
    props.refresh();
    let employeeDetail = JSON.parse(
      `${localStorage.getItem("Employeedetails") || "[]"}`
    );
    console.log("Employeedetails", employeeDetail);
    employeeDetail = employeeDetail.map((value: any) => {
      if (
        value.name === props.name &&
        value.designation === props.designation &&
        value.employeedetails === props.employeedetails
      ) {
        console.log("value.name", value.name);
        console.log("name", props.name);
        return {
          ...value,
          name: Employeename,
          designation: Designation,
          employeedetails: Employeedetails,
        };
      }
      return value;
    });

    localStorage.setItem("Employeedetails", JSON.stringify(employeeDetail));
    props.refresh();
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Deletefunction = () => {
    let employeeDetail = JSON.parse(
      `${localStorage.getItem("Employeedetails") || "[]"}`
    );

    for (let index = 0; index < employeeDetail.length; index++) {
      if (
        props.name === employeeDetail[index].name &&
        props.designation === employeeDetail[index].designation
      ) {
        employeeDetail = [
          ...employeeDetail.slice(0, index),
          ...employeeDetail.slice(index + 1),
        ];
      }
    }

    localStorage.setItem("Employeedetails", JSON.stringify(employeeDetail));
    props.refresh();
  };
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
                  <Button className="deletebtn" onClick={Deletefunction}>
                    Delete
                  </Button>
                </span>
                <Button
                  className="viewdetailsbtn"
                  type="primary"
                  onClick={() => setIsModalVisible(true)}
                >
                  View details
                </Button>
                
                <Modal
                  className="modalpopup"
                  centered
                  visible={isModalVisible}
                  onOk={() => setIsModalVisible(false)}
                  onCancel={handleCancel}
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
                        value={Employeename}
                        onChange={(e) => setEmployeename(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Designation">
                      <Input
                        className="Inputfield"
                        value={Designation}
                        onChange={(e) => setDesignation(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item className="empdetails" label="Employee Details">
                      <TextArea
                        rows={4}
                        className="Inputfield1"
                        value={Employeedetails}
                        onChange={(e) => setEmployeedetails(e.target.value)}
                      />
                    </Form.Item>

                    <Button className="cancelBtn" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <span>
                      <Button
                        type="primary"
                        className="saveBtn"
                        onClick={EditFun}
                      >
                        Edit{" "}
                      </Button>
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
