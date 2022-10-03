import { Button, notification, Form, Input } from 'antd';
import React, { useState } from 'react';

function DashboardPassword() {
  const [loading, setLoading] = useState(false)
  const onFinish = (values) => {
    setLoading(true)
    console.log('Success:', values);
    setLoading(false)
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: 'Oops!!!',
      description: 'Something went wrong. Please try again!',
    })
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     

      <Form.Item
        label="Old Password"
        name="oldPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="New Password"
        name="newPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Comfirm Password"
        name="coPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" size='large'  loading={loading}>
          Submit your choice
        </Button>
      </Form.Item>
    </Form>
  );
}

export default DashboardPassword