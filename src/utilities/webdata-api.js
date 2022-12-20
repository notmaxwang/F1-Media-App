const ROOT_URL = 'https://ergast.com/api/f1/';
const _COMPONENTS = require('./components.json');

// Check for error, if response is 200, request has
// succeeded, if not, throw error.
const status = (res) => {
  if (res.status !== 200) {
    console.log("Request error:" + res.status);
    return Promise.reject(new Error(res.statusText));
  }
  else {
    return Promise.resolve(res);
  }
}

// Utility functions
const json = (res) => res.json();
const error = (err) => console.log("Request failed: ", err);
const age = (dob) => {
  const then = new Date(dob);
  const now = new Date();
  return now.getFullYear() - then.getFullYear();
};

const getRaceResults = (season) => {
  const url = api + `${season}`;
  let races;
  return fetch(url + '.json')
    .then(status)
    .then(json)
    // Retrieve the array of race results from the data
    .then( (data) => data.MRData.RaceTable.Races)
    .then( (data) => {
      races = data;
    })
    // Map the array of race results to a new array of objects with the desired data
    .then( () => {
      return races.map( (race) => {
        const results = race.Results[0];
        // Check if there are any timing results (no participation)
        const raced = 'FastestLap' in results ? true : false;
        return {
          round: Number(race.round),
          start: Number(results.grid),
          finish: Number(results.position),
          fastestLap: raced ? results.FastestLap.Time.time : '0:00.000',
          avgSpeed: raced ? Number(results.FastestLap.AverageSpeed.speed) : 0
        }
      });
    })
  .catch(error);
}

