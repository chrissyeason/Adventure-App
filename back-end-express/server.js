require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI
// controllers
const adventureController = require('./controllers/adventureController')

mongoose.connect(mongoURI, {useNewUrlParser: true}, () =>{
    console.log('the connection to mongodb is established')
})

// controllers routes
app.use('/adventures', adventureController);

app.get('/', (req, res) => {
    res.send('index working');
})

app.listen(PORT, (req, res) => {
    console.log('listening on port 3000');
})
