const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri = "mongodb+srv://470project:<>@470project.c8o1q.mongodb.net/";
// Function to interact with the "orders" collection
async function run() {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    // Access the database and collection
    const database = client.db("BookHouse");
    const ordersCollection = database.collection("Orders");

    // Example document to insert
    const newOrder = {
      price: 49.99,
      products: [
        { productId: "1", name: "Book A", quantity: 1 },
        { productId: "2", name: "Book B", quantity: 2 }
      ],
      email: "customer@example.com",
      address: "jsebejkjses"
    };

    // Insert the document into the "orders" collection
    const result = await ordersCollection.insertOne(newOrder);
    console.log(`New order inserted with ID: ${result.insertedId}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Close the client connection
    await client.close();
  }
}

run();
