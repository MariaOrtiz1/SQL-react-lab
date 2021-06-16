// servers send responses and recieve requests (from clients)
// imports in node looks like this! (Changes every few years, constantly evolving)
// syntax between node and javascript is one of the only real differences
const express = require('express');
const trials = require('./data.js')
const app = express();
// declaring what port to use
const port = 3000;

// our first ENDPOINT / ROUTE
// Node will be told to listen for requests at the path: '/'
app.get('/trials', (req, res) => {
// when it recieves a request at this path, it will respond with 'hello world'
    res.json(trials);
});

app.get('/trials/:id', (req, res) => {
    const id = Number(req.params.id);

    const trial = trials.find((singleTrial) => singleTrial.id === id);
    res.json(trial);
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});
