const express = require('express');
const bodyParser = require('body-parser');
const {fetchCovidData} = require('./fetcher');

const raw = require('./rawTestData/daily.json');

const app = express();

app.use(bodyParser.json());

app.get('/api/covid', async (req, res) => {
  res.json(await fetchCovidData(raw));
});

module.exports = app;