const express = require("express");
const dotenv = require("dotenv");
const contractRoutes = require("./routes/contract.routes");
const templateRoutes = require("./routes/template.routes");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to SmartSeal API");
});

// Add more routes here
app.use("/api/contracts", contractRoutes);
app.use("/api/templates", templateRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
