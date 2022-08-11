const express = require("express");
const cors = require("cors");
const path = require("path");
const { getWinners, createWinner, seed } = require("./controller");
const app = express();
// const querystring = require("querystring");
require("dotenv").config();
const axios = require("axios");
app.use(express.json());
app.use(cors());

const {
  // to pull Winner table from database
  getWinner,

  // to update a winner in the database
  updateWinner,
} = require("./controller");

app.get(`/api/winners`, getWinners);
app.post(`/api/winners`, createWinner);
app.post(`/api/seed`, seed);

app.use(express.static("static"));
app.use(express.static(path.join(__dirname, "../Client")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/../client/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
