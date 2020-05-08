const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({enpoints: 'None yet :('});
});

module.exports = app;