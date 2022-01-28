const authRouter = require('./authRouter')
const auth = require('./auth')
const musicRouter = require('./musicRouter')
const spotifyRouter = require('./spotifyRouter')

function routes(app) {
	app.use('spotify', spotifyRouter)
	app.use('/music', musicRouter)
	app.use('/auth', authRouter)
	app.get('/', auth, (req,res) => {
		res.status(200).json({
			isAuth: true,
			message: 'Authorizated'
		})
	})
}

module.exports = routes