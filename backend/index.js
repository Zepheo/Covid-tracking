const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app');

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.error(`ERROR: ${err.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});