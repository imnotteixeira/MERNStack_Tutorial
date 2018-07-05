require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodypasrser Middleware
app.use(bodyParser.json());

//DB URI
const db = process.env.DB_URI; 


// Connect to DB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('hello'));
//Use Routes
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

//Start the Server
app.listen(PORT, () => console.log(`Server started on Port ${PORT}!`));