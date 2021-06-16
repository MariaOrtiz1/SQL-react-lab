// servers send responses and recieve requests (from clients)
// imports in node looks like this! (Changes every few years, constantly evolving)
// syntax between node and javascript is one of the only real differences
const express = require('express');
const trials = require('./data.js')
const app = express();
// important gotcha! Copy this line!
const port = process.env.PORT || 3000;

// our first ENDPOINT / ROUTE
app.get('/', (req, res) => {
    res.json('Final Fantasy Trials');
});
// Node will be told to listen for requests at the path: '/trials'
app.get('/trials', (req, res) => {
// when it recieves a request at this path, it will respond with the array we have in data.js
    res.json(trials);
});

app.get('/trials/:id', (req, res) => {
    const id = Number(req.params.id);
// this const is made up of a boolean, making sure to have matching numbers on the url with the id number
    const trial = trials.find((singleTrial) => singleTrial.id === id);
    res.json(trial);
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});
