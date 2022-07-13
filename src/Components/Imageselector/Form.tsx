import { Button, Form, Input } from "antd";
import React from "react";
import "./Form.css";
const { TextArea } = Input;

const Popupform: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        <Input className="Inputfield" />
      </Form.Item>

      <Form.Item
        label="Designation"
        name="Designation"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="Inputfield" />
      </Form.Item>
      <Form.Item label="Employee Details">
        <TextArea rows={4} className="Inputfield" />
      </Form.Item>

      <Button>Cancel</Button>
      <span>
        <Button type="primary">Save</Button>
      </span>
    </Form>
  );
};

export default Popupform;
