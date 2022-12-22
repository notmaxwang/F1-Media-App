const ROOT_URL = 'https://ergast.com/api/f1/';


module.exports = {
  getRaceResults,
}

// Check for error, if response is 200, request has
// succeeded, if not, throw error.
function status(res) {
  if (res.status !== 200) {
    console.log("Request error:" + res.status);
    return Promise.reject(new Error(res.statusText));
  }
  else {
    return Promise.resolve(res);
  }
}


function age(dob) {
  const then = new Date(dob);
  const now = new Date();
  return now.getFullYear() - then.getFullYear();
};

async function getRaceResults(req,res) {
  const url = ROOT_URL + '2022';
  let response = await fetch(url + '.json');
  let data = await response.json();
  let races = data.MRData.RaceTable.Races;
  res.json(races);
}


