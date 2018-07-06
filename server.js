require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//Bodypasrser Middleware
app.use(bodyParser.json());

//Use Routes
app.use('/api/items', items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const DB_OPTIONS = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
 
mongoose.connect(process.env.DB_URI, DB_OPTIONS);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  

const PORT = process.env.PORT || 5000;
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
  app.listen(PORT, () => console.log(`Server started on Port ${PORT}!`));
});

