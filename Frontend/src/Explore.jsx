import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spin, Typography, Button, message } from 'antd';
import { useCart } from './CartContext';

const { Title, Text } = Typography;

function Explore() {
  const [bookHouses, setBookHouses] = useState([]);
  const [cart, setCart] = useState([]); // State to store cart items
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch books from the backend API
    axios
      .get('/books') // Replace with your API endpoint
      .then((response) => {
        setBookHouses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching BookHouses:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (bookHouse) => {
    // Add the selected book to the cart
    setCart((prevCart) => [...prevCart, bookHouse]);

    // Display success message
    message.success(`${bookHouse.title} added to cart!`);
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="explore-page" style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        Explore BookHouse
      </Title>
      <Row gutter={[16, 16]}>
        {bookHouses.map((bookHouse) => (
          <Col key={bookHouse._id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={bookHouse.title}
                  src={bookHouse.image || 'default-bookhouse-image.jpg'}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              }
            >
              <Card.Meta
                title={bookHouse.title}
                description={
                  <>
                    <Text>
                      <strong>Author:</strong> {bookHouse.author}
                    </Text>
                    <br />
                    <Text>
                      <strong>Category:</strong> {bookHouse.category}
                    </Text>
                    <br />
                    <Text>
                      <strong>Price:</strong> ${bookHouse.price}
                    </Text>
                    <br />
                  </>
                }
              />
              {/* Add to Cart Button */}
              <Button
                type="primary"
                block
                style={{ marginTop: '10px' }}
                onClick={() => handleAddToCart(bookHouse)}
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Explore;
