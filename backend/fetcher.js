const axios = require('axios');
const {handler} = require('./dataHandler');

const url = 'https://covidtracking.com/api/v1/states/daily.json'

async function fetchCovidData() {
  const { data } = await axios.get(url);
  return handler(data);
}

module.exports.fetchCovidData = fetchCovidData;