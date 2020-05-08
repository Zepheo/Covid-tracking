const {handler} = require('../dataHandler');
const raw = require('../rawTestData/daily.json');

describe('handler', () => {
  test('should return an array', () => {
    const res = handler(raw);
    expect(Array.isArray(res)).toBe(true);
  });

  test('should contain 56 entries', () => {
    const res = handler(raw);
    expect(res.length).toBe(56);
  });
  
  test('each entry should have state name hospitalizedCurrently lastThreeDayDeaths', () => {
    const res = handler(raw);
    
    expect(res[0]).toHaveProperty('state');
    expect(res[0]).toHaveProperty('name');
    expect(res[0]).toHaveProperty('hospitalizedCurrently');
    expect(res[0]).toHaveProperty('lastThreeDayDeaths');
  });
  
  test('should calculate lastThreeDayDeaths', () => {
    const res = handler(raw);  
    
    expect(res[5].lastThreeDayDeaths).toBe(250);
    expect(res[0].lastThreeDayDeaths).toBe(1);
  });
});