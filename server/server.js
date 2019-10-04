const express = require('express');
const app = express();
const port = 3000;
const api = require('./MockDb');
const path = require('path');


app.get('/api/quotes', (req, res) => res.json(api));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))