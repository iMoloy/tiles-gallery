import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB || "tiles_gallery";

let client;

if (process.env.NODE_ENV === "development") {
  if (!global._tilesMongoClient) {
    global._tilesMongoClient = new MongoClient(uri);
  }

  client = global._tilesMongoClient;
} else {
  client = new MongoClient(uri);
}

export const mongoClient = client;
export const mongoDb = client.db(dbName);
