const authRouter = require('./authRouter')
const auth = require('./auth')
const musicRouter = require('./musicRouter')

function routes(app) {
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