require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI, {useNewUrlParser: true})
mongoose.connection.once('open', () =>{
    console.log('connected to mongo')
})

app.listen(PORT, () => {
    console.log('listening on port 3000');
})
