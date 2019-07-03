const express = require('express');
const app = express();
const port = 3000;
const api = require('./MockDb');

app.get('/api/quotes', (req, res) => res.json(api));

app.get('/', (req, res) => res.sendFile(__dirname, '../index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))