const authRouter = require('./authRouter')
const auth = require('./auth')
const musicRouter = require('./musicRouter')
const spotifyRouter = require('./spotifyRouter')
const postRouter = require('./postRouter')
const User = require('../models/User')
const chatRouter = require('./chatRouter')

function routes(app) {
	app.use('/post',auth, postRouter)
	app.use('/spotify', spotifyRouter)
	app.use('/music', musicRouter)
	app.use('/auth', authRouter)
	app.use('/chat',auth, chatRouter)
	app.get('/', auth, async (req,res) => {
		const user = await User.findOne({email: req.user.email})
		if (!user) return res.status(400).json('User not found!')

		try {
			res.status(200).json({
				success: true,
				message: 'Authorizated',
				user
			})
		} catch(err) {
			res.status(401).json({
				success: false,
				message: 'User not authorizated'
			})
		}


	})
}

module.exports = routes