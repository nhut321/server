const authRouter = require('./authRouter')
const auth = require('./auth')
const musicRouter = require('./musicRouter')
const spotifyRouter = require('./spotifyRouter')
const postRouter = require('./postRouter')
const User = require('../models/User')

function routes(app) {
	app.use('/post', postRouter)
	app.use('/spotify', spotifyRouter)
	app.use('/music', musicRouter)
	app.use('/auth', authRouter)
	app.get('/', auth, async (req,res) => {
		// console.log(req.user)
		const user = await User.findOne({email: req.user.email})
		console.log(user)
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