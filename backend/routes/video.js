const router = require('express').Router()
const video = require('../controllers/video')

router.get('/', video.get)
router.get('/:id', video.getById)
router.put('/:id/play', video.play)
router.post('/', video.create)
router.delete('/:id', video.remove)

module.exports = router
