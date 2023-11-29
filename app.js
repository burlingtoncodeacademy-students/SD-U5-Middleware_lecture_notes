const express = require('express');
const app = express();
const PORT = 4000;
const { logTime } = require('./utils');
const authController = require('./controllers/auth.controller');

//* Middleware
app.use(logTime);
app.use(express.json());
app.use(express.urlencoded()); // parses the body from our browser so it can display the response.
app.use(express.static(`${__dirname}/public`));

//* Controllers
app.use('/todo', authController);

//* Port 
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});