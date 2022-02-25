const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chat = new Schema({
	message: String,
	name: String,
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	time: {
		type: Object,
	}
})

module.exports = mongoose.model('chat', Chat)