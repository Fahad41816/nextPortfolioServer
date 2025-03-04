const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Personal Portfolio");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nifahad:qNBRXZHuOiFbyNQL@cluster0.06bnipr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(5000, () => {
  console.log("Server Listening...");
});
