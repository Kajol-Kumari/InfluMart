const influencersDB = require('../middleware/db');

// Perform authentication and retrieve influencer by username and password
function authenticate(userName, password) {
  return influencersDB.find((inf) => inf.userName === userName && inf.password === password);
}

module.exports = { authenticate };