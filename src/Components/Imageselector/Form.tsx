import { type } from "@testing-library/user-event/dist/type";
import { Button, Form, Input, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import { json } from "stream/consumers";
import "./Form.css";
import Imageselector from "./Imageselector";
const { TextArea } = Input;

const Popupform = (props: any) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [Employeename, setEmployeename] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Employeedetails, setEmployeedetails] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const buttonClick = () => {
    props.refresh();
    setIsModalVisible(false);
    let formdetail = JSON.parse(
      `${localStorage.getItem("Employeedetails") || "[]"}`
    );
    const formValue = {
      name: Employeename,
      designation: Designation,
      employeedetails: Employeedetails,
    };
    console.log(formValue);
    formdetail.push(formValue);
    localStorage.setItem("Employeedetails", JSON.stringify(formdetail));
    form.resetFields();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" className="CreateBtn" onClick={showModal}>
        Create Workflow
      </Button>
      <Modal
        title="Setup Employee"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Row>
          <Col span={8}>
            <Imageselector />
          </Col>
          <Col span={16}>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Employee Name"
                name="Employeename"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  className="Inputfield"
                  value={Employeename}
                  onChange={(e) => setEmployeename(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Designation"
                name="Designation"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
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
                  onClick={buttonClick}
                  className="saveBtn"
                >
                  Save
                </Button>
              </span>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Popupform;
