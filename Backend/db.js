const { MongoClient } = require('mongodb');

// MongoDB Atlas connection string
const uri = "mongodb+srv://470project:<>@470project.c8o1q.mongodb.net/"; // Replace <username>, <password>, and myDatabase

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    // Access the database and collection
    const database = client.db("BookHouseDB");  // Replace with your database name
    const collection = database.collection("Books");  // Replace with your collection name

    // Example document to insert
    const newBook = {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      price: 14.99,
      available: true
    };

    // Insert the document into the collection
    const result = await collection.insertOne(newBook);
    console.log(`New book inserted with ID: ${result.insertedId}`);
  } catch (error) {
    console.error("Error inserting document:", error);
  } finally {
    // Ensure the client will close after the operation
    await client.close();
  }
}

// Run the function
run().catch(console.error);
