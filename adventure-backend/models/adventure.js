const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
    what: String,
    where: String,
    when: String,
    description: String,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
const Adventure = mongoose.model('Adventure', adventureSchema);
module.exports = Adventure;