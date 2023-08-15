const router = require('express').Router()
const comment = require('../controllers/comment')

router.get('/:videoId', comment.get)
router.post('/', comment.create)
router.delete('/:id', comment.remove)

module.exports = router
