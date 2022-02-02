const jwt = require('jsonwebtoken')

function auth(req,res,next) {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]
	if(!token) {
		return res.status(401).json('Access token not found!')
	}
	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		next() 

	} catch(err) {
		return res.status(400).json({
			success: false,
			message: 'Invalid token'
		})
	}
}

module.exports = auth