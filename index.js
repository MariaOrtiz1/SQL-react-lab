// servers send responses and recieve requests (from clients)
// imports in node looks like this! (Changes every few years, constantly evolving)
// syntax between node and javascript is one of the only real differences
const express = require('express');
const app = express();
// declaring what port to use
const port = 3000;

// our first ENDPOINT / ROUTE
// Node will be told to listen for requests at the path: '/'
app.get('/', (req, res) => {
// when it recieves a request at this path, it will respond with 'hello world'
    res.send('Main page!');
});

app.get('/second-page', (req, res) => {
    res.send('Second-page!');
});

app.get('/third-page', (req, res) => {
    res.send('Third page!');
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});