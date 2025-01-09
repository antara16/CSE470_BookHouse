const express = require('express');
const cors = require('cors'); // Import cors
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 5000;

// MongoDB Atlas connection string
const uri = "mongodb+srv://470project:CSE470@470project.c8o1q.mongodb.net/";
const client = new MongoClient(uri);

// Middleware to handle JSON requests
app.use(express.json());

// Enable CORS for all origins (or configure specific origins)
app.use(cors()); // Add this line
app.use(cors({ origin: 'http://localhost:5173' })); 
// Example route to add a book
app.post('/add-book', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("BookHouse");
    const collection = database.collection("BookHouse");

    const newBook = req.body; // Assuming you send book details in the request body
    const result = await collection.insertOne(newBook);
    res.json({ message: `New book inserted with ID: ${result.insertedId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting book', error: error.message });
  } finally {
    await client.close();
  }
});

// Route to get the list of books
app.get('/books', async (req, res) => {
  try {
    console.log('Attempting to connect to the database...');
    await client.connect();
    console.log('Connected to the database successfully!');

    const database = client.db("BookHouse");
    const collection = database.collection("BookHouse");

    const books = await collection.find({}).toArray();
    console.log(books); // Log the books array instead of calling res.json()
    res.json(books); // Send the response only once
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  } finally {
    await client.close();
    console.log('Database connection closed.');
  }
});

app.post('/add-order', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("BookHouse");
    const collection = database.collection("orders");

    const { name, email, address, paymentMethod } = req.body;

    if (!name || !email || !address || !paymentMethod) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newOrder = { name, email, address, paymentMethod };
    const result = await collection.insertOne(newOrder);
    res.json({ message: `Order created with ID: ${result.insertedId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  } finally {
    await client.close();
  }
});
app.get('/orders', async (req, res) => {
  try {
    console.log('Attempting to connect to the database...');
    await client.connect();
    console.log('Connected to the database successfully!');

    const database = client.db("BookHouse");
    const collection = database.collection("orders");

    const orders = await collection.find({}).toArray();
    console.log(orders);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  } finally {
    await client.close();
    console.log('Database connection closed.');
  }
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
