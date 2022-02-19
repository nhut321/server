const router = require('express').Router()
const spotifyWebApi = require('spotify-web-api-node')

const credentials = {
	redirectUri: 'http://localhost:3000',
	clientId: '0e7a251759ae45dd84159c33ffc1309b',
	clientSecret: '0d0b9b33c0a847eaa53d9d54ebb33334'
}

router.post('/refresh', (req,res) => {
	const refreshToken = req.body.refreshToken
	const spotifyApi = new spotifyWebApi({
		redirectUri: credentials.redirectUri,
		clientId: credentials.clientId,
		clientSecret: credentials.clientSecret,
		refreshToken
	})
	spotifyApi.refreshAccessToken().then(
		(data) => {
			res.json({
				accessToken: data.body.access_token,
				expiresIn: data.body.expires_in
			})
		}
	).catch((err) => {
		res.status(400).json(err)
	})
})


router.post('/login', (req,res) => {
	const spotifyApi = new spotifyWebApi(credentials)

	const code = req.body.code
	spotifyApi.authorizationCodeGrant(code)
		.then(data => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in
			})
		})
		.catch(err => {
			res.sendStatus(400)
		})
})

module.exports = router
