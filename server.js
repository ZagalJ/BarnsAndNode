const express = require('express');
//const routes = require('./routes');

// import sequelize connection
const seq = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


/// For API use only when API is ready
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
