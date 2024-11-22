const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to SmartSeal API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
