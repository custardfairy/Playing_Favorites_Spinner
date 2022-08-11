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
// app.put(`/api/winners/:id`, updateWinner);

app.use(express.static("static"));
app.use(express.static(path.join(__dirname, "../Client")));


// app.use(cookieParser(process.env.COOKIE_SECRET));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/../client/index.html"));
});

// const state = {
//   rg78qn: {
//     redirect_uri: "http://localhost:3000/",
//   },
// };

// app.get("/auth", (req, res) => {
//   // const stateParam = nanoid(8);
//   // res.cookie("stateParam", stateParam, { maxAge: 1000 * 60 * 5, signed: true });
//   res.redirect(
//     `https://api.boardgameatlas.com/oauth/authorize?` +
//       querystring.stringify({
//         response_type: "code",
//         state: process.env.STATE_PARAM,
//         client_id: process.env.BGA_CLIENT_ID,
//         redirect_uri: `http://localhost:3000/oauthcallback`,
//       })
//   );
// });

// app.get("/oauthcallback", ({ query: { code } }, res) => {
//   const body = {
//     client_id: process.env.BGA_CLIENT_ID,
//     client_secret: process.env.BGA_CLIENT_SECRET,
//     code,
//     redirect_uri: "http://localhost:3000/oauthcallback",
//     grant_type: "authorization_code",
//   };
//   const opts = { headers: { accept: "application/json" } };
//   axios
//     .post("https://api.boardgameatlas.com/oauth/token", body, opts)
//     // .then((_res) => _res.data.access_token)
//     .then((token) => {
//       console.log(token);
//       let uri =
//         "http://localhost:3000/" || "http://localhost:3000/oauthcallback";
//       res.redirect(uri);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
