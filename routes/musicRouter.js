const router = require('express').Router()
const Music = require('../models/Music')

router.get('/', async (req,res) => {
    try {
        await Music.find({})
            .then(data => res.json(data))
    } catch(err) {
        console.log(err)
    }
})

module.exports = router