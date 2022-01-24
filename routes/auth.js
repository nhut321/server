const jwt = require('jsonwebtoken')

function auth(req,res,next) {
	const token =  req.headers["authorization"]
	if(!token) {
		res.json('Token is not found!')
	}
	if(token) {
		const newToken = token.split(' ')[1]
		try {
			const decoded = jwt.verify(newToken, process.env.SECRET_KEY)
			req.user = decoded
			next()

		} catch(err) {
			res.status(400).json({
				success: false,
				message: 'Invalid token'
			})
		}

	}
}

module.exports = auth