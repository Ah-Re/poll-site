const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Wow, you're finally working on this project.");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})