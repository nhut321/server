const router = require('express').Router()
const ChatCtrl = require('../controllers/ChatControllers')

router.get('/', ChatCtrl.getMess)
router.post('/create', ChatCtrl.createMess)

module.exports = router