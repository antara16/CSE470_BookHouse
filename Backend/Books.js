const { MongoClient } = require('mongodb');

// MongoDB connection URI (
const uri = "mongodb+srv://470project:<>@470project.c8o1q.mongodb.net/";

// Function to connect to the database and interact with the "BookHouse" collection
async function run() {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    // Access the database and collection
    const database = client.db("BookHouse");
    const collection = database.collection("BookHouse");

    // Example document to insert
    const newBook = {
        title: "The Great Gatsby",
        imageURL: "https://example.com/great-gatsby.jpg",
        price: 10.99,
        rating: 4.7,
        author: "F. Scott Fitzgerald",
        category: "Fiction"
      };
  
      // Insert the document into the collection
      const result = await collection.insertOne(newBook);
      console.log(`New book inserted with ID: ${result.insertedId}`);
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    } finally {
      // Close the connection
      await client.close();
    }
  }
  
  run();
