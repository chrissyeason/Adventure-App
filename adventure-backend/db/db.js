// This is where we will set up our db connection
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/' + 'Adventures';

// that is automatically created
mongoose.connect( mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});