import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Typography, Space } from 'antd';
import { useCart } from './CartContext'; // Import useCart hook from CartContext

const { Title } = Typography;

const Cart = () => {
  // Use the cart items from CartContext
  const { cartItems, addToCart } = useCart(); // Fetch cartItems from context

  // Add "The Great Gatsby" if the cart is empty
  if (cartItems.length === 0) {
    addToCart({
      id: '677ed780b7bfd57567d9c940',
      title: 'The Great Gatsby',
      price: 10.99,
      quantity: 1,
    });
  }

  // Calculate the total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Define columns for Ant Design's Table
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => `$${record.price * record.quantity}`,
    },
  ];

  // Check if the cart is empty
  if (cartItems.length === 0) {
    return <Title level={4}>Your cart is empty</Title>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Shopping Cart</Title>
      <Table
        dataSource={cartItems}
        columns={columns}
        rowKey="id" // Ensure the correct key is used
        pagination={false}
        style={{ marginBottom: '20px' }}
      />
      <Space direction="vertical" style={{ width: '100%', alignItems: 'end' }}>
        <Title level={4}>Total: ${total}</Title>
        <Link to="/checkout">
          <Button type="primary" size="large">
            Proceed to Checkout
          </Button>
        </Link>
      </Space>
    </div>
  );
};

export default Cart;
