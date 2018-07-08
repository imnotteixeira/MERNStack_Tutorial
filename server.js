require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const todos = require('./routes/api/todos');

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

//Use Routes
app.use('/api/items', items);
app.use('/api/todos', todos);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

//Start the Server
app.listen(PORT, () => console.log(`Server started on Port ${PORT}!`));