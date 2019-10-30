const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },
    user: {type: String, required: true},
    message: {type: String, required: true},
    room: String
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;