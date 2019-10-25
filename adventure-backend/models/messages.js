const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
    username: String,
    message: {type: String, required: true},
    room: String
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;