const express = require('express');
const app = express();
const PORT = 4000;
const practiceController = require('./controllers/practice.controller');

//* Middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//* Controllers
app.use('/practice', practiceController);

//* Port 
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});