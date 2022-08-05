const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('Server started on port 3000');
}).on('error', (err) => {
    console.log(err);
}
// api code for pulling from BGA
// app.post()