const jwt = require('jsonwebtoken')

function auth(req,res,next) {
	const token = req.headers["authorization"].split(' ')[1]
	
	if(!token) {
		res.json('Token is not found!')
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY)

		req.user = decoded
		next()

	} catch(err) {
		res.json(err)
	}
}

module.exports = auth