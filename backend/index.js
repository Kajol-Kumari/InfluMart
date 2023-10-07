const express = require('express');
// const Data = require('./model/data');
const cors = require('cors');
const http = require('http');
require('./middleware/db');
require('dotenv').config();
// const User = require('./model/user');
// const {auth} = require('./middleware/auth');
var cookies = require("cookie-parser");

const app = express();
const server = http.Server(app);

// CORS
app.use(cors());

// Body Parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookies());


// Home route
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello There!! You are at the backend server!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(
  PORT,
  console.log(`Server running in ${process.env.ENV || 'development'} mode on port ${PORT}`)
);

// handle the error safely
process.on('uncaughtException', (err) => {
  console.log(err);
});

module.exports = app;