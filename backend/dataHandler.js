const stateToNameMapper = require('./stateToNameMapper');

const handler = (data) => {
  const lastDayData = data.filter( (state) => state.date === data[0].date);

  const threeDayDeaths = [];
  for (const [i, info] of data.entries()) {
    if (i > 167) {
      break;
    }
    const existing = threeDayDeaths.filter((s) => s.state === info.state);

    if (existing.length) {
      const existingIndex = threeDayDeaths.indexOf(existing[0]);
      threeDayDeaths[existingIndex].lastThreeDayDeaths += info.deathIncrease;
    } else {
      threeDayDeaths.push({state: info.state, lastThreeDayDeaths: info.deathIncrease});
    }
  };
  
  const mappedLastDayData = lastDayData.map( (state) => ({
    state: state.state,
    name: stateToNameMapper(state),
    hospitalizedCurrently: state.hospitalizedCurrently,
    lastThreeDayDeaths: threeDayDeaths.filter(info => info.state === state.state)[0].lastThreeDayDeaths
  }))
  
  return mappedLastDayData;
};

module.exports.handler = handler;