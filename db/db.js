// import mongodb client and server api version
const { MongoClient, ServerApiVersion } = require("mongodb");

// get mongodb connection uri from environment variables
const MONGO_URI = process.env.MONGO_URI;

// create a new mongo client instance with server API settings
const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// function to connect to mongodb and check the connection
async function run() {
  try {
    // connect the client to the server
    await client.connect();
    // send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "pinged your deployment. you have successfully connected to mongodb"
    );
  } catch {
    // close the client connection on error
    await client.close();
  }
}

// execute the connection on error
run();
// get reference to specific database
const db = client.db("flavour_fusion_recipes");

// export the database reference for use in other modules
module.exports = { db };
