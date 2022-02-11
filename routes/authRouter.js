const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/login', async (req,res) => {
	const { email,password } = req.body
	// try {
	// 	const user = await User.findOne({email})
	// 	if(user) {
	// 		res.json(user)
	// 	}
	// } catch(err) {
	// 	res.json(err)
	// }

	const user = await User.findOne({email})
	if(!user) return res.json({
		success: false,
		message: 'Email not found'
	})
	try {
		// console.log(user)
		bcrypt.compare("baconsoi", user.password, function(err, result) {
			const token = jwt.sign({email}, process.env.SECRET_KEY)
			if (result == password) {
				res.status(200).json({
					success: true,
					message: 'Login success',
					token,
					user
				})
			} else {
				res.json({
					success: false,
					message: 'Email or password is incorrect'
				})
			}
		})
	} catch (error) {
		res.json(error)
	}

	// User.findOne({email})
	// 	.then(user => {
	// 		if(!user) {
	// 			res.json('Email or password is incorrect')
	// 		}
	// 			bcrypt.compare("baconsoi", user.password, function(err, result) {
	// 				const token = jwt.sign({email}, process.env.SECRET_KEY)
	// 				if (result == password) {
	// 					res.status(200).json({
	// 						success: true,
	// 						message: 'Login success',
	// 						token
	// 					})
	// 				} else {
	// 					res.json('Email or password is incorrect')
	// 				}
	// 			})
	// 	})
})

router.post('/register', async (req,res) => {
	const email = req.body.email
	let password = req.body.password
	try {
		const user = await User.findOne({ email })
		if (user) {
			res.json('Email is exists')
		}
		if(!user) {
			bcrypt.genSalt(10, function(err, salt) {
			    bcrypt.hash("baconsoi", salt, function(err, hash) {
			    	password = hash
			        const newUser = User({email,password})
			        res.json(newUser)
			    });
			});
		}
	} catch(err) {
		console.log(err)
	}
})

module.exports = router