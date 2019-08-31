const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
    what: String,
    where: String,
    when: String,
    description: String,
    image: String
})
const Adventure = mongoose.model('Adventure', adventureSchema);
module.exports = Adventure;