const router = require('express').Router()
const spotifyWebApi = require('spotify-web-api-node')

const credentials = {
	redirectUri: 'http://localhost:3000/mymusic',
	clientId: '0e7a251759ae45dd84159c33ffc1309b',
	clientSecret: '0d0b9b33c0a847eaa53d9d54ebb33334'
}

router.post('/login', (req,res) => {
	const spotifyApi = new spotifyWebApi(credentials)

	const code = req.body.code
	spotifyApi.authorizationCodeGrant(code)
		.then(data => {
			res.json({
				accessToken: data.access_token,
				refreshToken: data.refresh_token,
				expiresIn: data.expires_in
			})
		})
		.catch(err => {
			console.log(err)
			res.sendStatus(400)
		})
})

module.exports = router