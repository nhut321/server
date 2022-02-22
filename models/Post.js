const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
	title: String,
	description: String,
	img: String,
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
},{ timestamps: true })

module.exports = mongoose.model('post', Post)