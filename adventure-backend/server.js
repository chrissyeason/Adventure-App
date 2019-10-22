require('dotenv').config()
require('./db/db');
const express           = require('express');
const app               = express();
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const cors              = require('cors');
const session           = require('express-session');
const io                = require('socket.io');

const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

io.on('connection', function(socket){
    console.log('a user connected');
  });

// CORS allows requrest to come in from React
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: false
}));

// Set up CORS as middleware so any client can make a request to our server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    console.log(req.session.userId)
    next();
})

// controllers after middleware
const adventureController = require('./controllers/adventureController')
const authController = require('./controllers/authController');

// controllers routes
app.use('/adventures', adventureController);
app.use('/user', authController);

app.listen(9000, (req, res) => {
    console.log('listening on port 9000');
})
