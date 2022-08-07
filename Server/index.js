const express = require('express');
// const cors = require('cors');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, "../Client")));

// app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../client/index.html"));
}); 
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
