const express = require('express');
const app = express();
const PORT = 4000;

//* Middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//* Controllers

//* Port 
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});