const router = require('express').Router()
const PostCtrl = require('../controllers/PostControllers')


router.post('/create', PostCtrl.createPost)

router.delete('/delete', (req,res) => {
	
})
router.get('/', PostCtrl.getPost)

module.exports = router