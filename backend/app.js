const express = require('express');
const bodyParser = require('body-parser');
const {handler} = require('./dataHandler');

const raw = require('./rawTestData/daily.json');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({enpoints: 'None yet :('});
});
app.get('/api/covid', (req, res) => {
  res.json(handler(raw));
});

module.exports = app;