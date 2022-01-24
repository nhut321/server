const authRouter = require('./authRouter')
const auth = require('./auth')

function routes(app) {
	app.use('/auth', authRouter)
	app.get('/', (req,res) => {
		res.json('test')
	})
}

module.exports = routes