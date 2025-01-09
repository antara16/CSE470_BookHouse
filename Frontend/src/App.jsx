import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from './CartContext'; // Wrap the app in the CartProvider
import Checkout from './Checkout';
import Success from './Success';
import Explore from './Explore';

function App() {
  return (
    <CartProvider> {/* CartProvider should wrap the entire Router */}
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} /> {/* Make sure to use lowercase here */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="logo">
        <h2>BookHouse</h2>
      </div>

      <div className="navmenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#categories">Categories</Link>
          </li>
          <li>
            <Link to="#contactus">Contact Us</Link> {/* Fixed typo */}
          </li>
          <li>
            <Link to="/explore">Explore</Link> {/* Explore Link */}
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search for books..." />
        <button>Search</button>
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        <Link to="/cart">
          <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
        </Link>
      </div>
    </nav>

    <div className="main-header">
      <div className="header">
        <h5>Book Rental Service</h5>
        <h2>Welcome to BookHouse</h2>
        <p>Explore our collection of books!</p>
        {/* Explore Button */}
        <Link to="/explore">
          <button className="explore-btn">Explore Now</button>
        </Link>
      </div>
      <img src="book.jpeg" alt="Book" />
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>@2025 All Rights Reserved By Free Online Book Shop</p>
  </footer>
);

export default App;
