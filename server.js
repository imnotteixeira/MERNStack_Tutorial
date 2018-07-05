require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodypasrser Middleware
app.use(bodyParser.json());

//DB URI
const db = process.env.DB_URI; 

// Connect to DB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 4000;

//Start the Server
app.listen(PORT, () => console.log(`Server started on Port ${PORT}!`));