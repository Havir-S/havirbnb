import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;
export async function connectDatabase() {
  if (!client || !client?.isConnected()) {
    client = await MongoClient.connect(uri, options);
    // Access the new client instance's "topology" property
    const isConnected = client.topology.isConnected();
    if (!isConnected) {
      throw new Error("MongoDB connection failed");
    }
  }
  db = client.db("havirbnb_database");
  return { client, db };
}
