const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Music = new Schema({
    name: String,
    singer: String,
    src: String,
    img: String
})

module.exports = mongoose.model('music', Music)