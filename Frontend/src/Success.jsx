import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Result } from 'antd';

const { Title, Paragraph } = Typography;

const Success = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Result
        status="success"
        title="Order Placed Successfully!"
        subTitle="Thank you for your purchase. Your order will be delivered soon."
        extra={[
          <Button type="primary" size="large" onClick={handleGoHome} key="home">
            Go to Home
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;
