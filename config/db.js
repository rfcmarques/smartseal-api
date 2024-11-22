const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${user}:${password}@smartseal-cluster.k4h9f.mongodb.net/?retryWrites=true&w=majority&appName=smartseal-cluster`;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const db = async () => {
  try {
    const conn = await mongoose.connect(uri, clientOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = db;
