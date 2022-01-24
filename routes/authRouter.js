const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require('bcryptjs')

router.post('/login', (req,res) => {
	const { email,password } = req.body
	User.findOne({email})
		.then(user => {
			if(!user) {
				res.json('Email or password is incorrect')
			}
			bcrypt.compare("baconsoi", user.password, function(err, result) {
				if (result == password) {
					res.json('Login success!')
				} else {
					res.json('Email or password is incorrect')
				}
			})
		})
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