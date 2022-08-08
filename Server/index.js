const express = require('express');
// const cors = require("cors");
const path = require("path");
const axios = require("axios");
const app = express();

app.use(express.static(path.join(__dirname, "../Client")));

// app.use(cors());
app.use(express.json());
// app.get to build the endpoint and determine function
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/../client/index.html"));
});

function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}
    
makeGetRequest("https://api.boardgameatlas.com/oauth/authorize?response_type=code&client_id=4ljazoQBAE&redirect_uri=http://localhost:3000/");

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
