const router = require('express').Router()
const product = require('../controllers/product')

router.get('/:videoId', product.get)
router.post('/', product.create)
router.delete('/:id', product.remove)

module.exports = router
