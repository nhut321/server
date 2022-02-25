const Chat = require('../models/Chat')

function ChatControllers() {
	this.getMess = async function(req,res) {
		try {
			const chat = await Chat.find({})
				.then(data => res.json(data)) 

		} catch(err) {
			res.json(err)
		}
	}
	this.createMess = function(req,res) {
		const { message, name, time } = req.body
		const chat = new Chat({message, name, userId: req.user.userId, time})
		chat.save()
		res.json({
			chat
		})
	}
}

module.exports = new ChatControllers