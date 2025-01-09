import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Radio, Button, Typography, message } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Checkout = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/add-order', values); // Use relative URL if proxy is working
      message.success('Order placed successfully!');
      navigate('/success');
    } catch (error) {
      console.error('Error submitting order:', error);
      message.error('Failed to place the order. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Title level={2}>Checkout</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          payment: 'cod', // Default payment method
        }}
      >
        {/* Name Field */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Address Field */}
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter your address' }]}
        >
          <Input.TextArea placeholder="Enter your address" rows={4} />
        </Form.Item>

        {/* Payment Method */}
        <Form.Item
          label="Payment Method"
          name="payment"
          rules={[{ required: true, message: 'Please select a payment method' }]}
        >
          <Radio.Group>
            <Radio value="cod">Cash on Delivery</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Checkout;
