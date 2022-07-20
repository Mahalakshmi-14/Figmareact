import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { json } from "stream/consumers";
import "./Form.css";
const { TextArea } = Input;

const Popupform: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [Employeename, setEmployeename] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Employeedetails, setEmployeedetails] = useState("");

  const buttonClick = () => {
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
  };
  return (
    <Form
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
        rules={[{ required: true, message: "Please input your username!" }]}
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
        rules={[{ required: true, message: "Please input your username!" }]}
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
          className="Inputfield"
          value={Employeedetails}
          onChange={(e) => setEmployeedetails(e.target.value)}
        />
      </Form.Item>

      <Button>Cancel</Button>
      <span>
        <Button type="primary" onClick={buttonClick}>
          Save
        </Button>
      </span>
    </Form>
  );
};

export default Popupform;
 



