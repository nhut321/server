const jwt = require('jsonwebtoken')

async function auth(req,res,next) {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]
	if(!token) {
		return res.json('Access token not found!')
	}
	try {
		const decoded = await jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		next() 

	} catch(err) {
		res.json({
			success: false,
			message: 'Invalid token'
		})
	}
}

module.exports = auth