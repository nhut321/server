const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
	title: String,
	description: String,
	img: String
})

module.exports = mongoose.model('post', Post)