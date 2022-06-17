const express = require('express');
const routes = require('./routes');
const DatabaseConnection = require('./database');

const app = express();
DatabaseConnection.connectMongo();

app.use(express.json());
app.use(routes);
app.listen(3000, () => {
  console.log('🔥 Server is running on port 3000');
});
