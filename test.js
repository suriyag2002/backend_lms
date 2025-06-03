const { MongoClient } = require('mongodb');

// Replace with your MongoDB URI
const uri = "mongodb+srv://Admin:S8U7KDPbXSbO7dHq@cluster.1i07b.mongodb.net/studentdb?retryWrites=true&w=majority";

async function testConnection() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to the MongoDB cluster
    await client.connect();
    console.log("✅ MongoDB connected successfully!");

    // Query the "students" collection in the "studentdb" database
    const database = client.db('studentdb');
    const collection = database.collection('students'); // Modify the collection name as needed
    const students = await collection.find({}).toArray();
    
    console.log('Data:', students);

    // Close the connection
    await client.close();
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
  }
}

testConnection();
