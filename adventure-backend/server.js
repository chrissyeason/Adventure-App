require('dotenv').config()
require('./db/db');
const express           = require('express');
const app               = express();
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const cors              = require('cors');
const session           = require('express-session');
const socket            = require('socket.io');
const Messages          = require('./models/messages');

const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

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
const adventureController = require('./controllers/adventureController');
const authController = require('./controllers/authController');
const chatController = require('./controllers/chatController');

// controllers routes
app.use('/adventures', adventureController);
app.use('/user', authController);
app.use('/chat', chatController);

server = app.listen(9000, function() {
    console.log('listening on port 9000');
})

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        let newMessage = {
            username: data.username,
            message: data.message,
            room: data.room
        }
        Messages.create(newMessage, (error, createdMessage) =>{
            console.log(newMessage);
        });
        io.emit('RECEIVE_MESSAGE', data);
    })
  });