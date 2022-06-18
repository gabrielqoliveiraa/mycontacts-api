/* eslint-disable no-unused-vars */
const express = require('express');
const routes = require('./routes');
const DatabaseConnection = require('./database');
require('express-async-errors');

const app = express();
DatabaseConnection.connectMongo();

app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  res.sendStatus(500);
});
app.listen(3000, () => {
  console.log('🔥 Server is running on port 3000');
});
