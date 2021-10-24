const MongoClient = require('mongodb').MongoClient;


let cachedDb = null;

export default async function connectToDatabase() {

    if (cachedDb) {
        return cachedDb;
    }

    const client = await  MongoClient.connect("mongodb://root:password@127.0.0.1:27017/");
    const db = client.db("database");
    cachedDb = db;

    return db;
}
