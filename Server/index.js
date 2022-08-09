const express = require('express');
// const cors = require("cors");
const path = require("path");
const { authBga } = require("./controller");
const app = express();

app.use(express.static(path.join(__dirname, "../Client")));

// app.use(cors());
app.use(express.json());
// app.get to build the endpoint and determine function
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/../client/index.html"));
});
app.get("/api/bga", authBga);

app.get("/node_modules/axios/dist/axios.min.js", function (req, res) {
  res.sendFile(path.join(__dirname, "../node_modules/axios/dist/axios.min.js"));
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
