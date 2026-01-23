//importing the required modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//initializing the express
const app = express();
app.use(cors());
app.use(express.json());

const db = require("./db");

app.get("/", (req, res) => {
  try {
    res.send("Working successfully");
  } catch (err) {
    console.log("error while connecting to the database");
  }
});
//initializing the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
