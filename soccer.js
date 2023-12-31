
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

function getTotalPoints(result) {
  let arrayResults = []
  arrayResults = result.split('');
  console.log(arrayResults);

  let total = 0;
     
 //arrayResults.forEach((getPointsFromResult) => {total += getPointsFromResult;})
  total += arrayResults.forEach((getPointsFromResult)); 
  return total;
     

}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderResults function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"


function orderResults(...args){ 

  let teams = []
  teams = Array.from(args);

}

function orderTeams(name,results){this.name = name; this.results = results;}
// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }   
) 


// should log the following to the console:
// Sounders: 7
// Galaxy: 4
