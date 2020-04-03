const router = require('express')()
const { contactController } = require('../controller/ContactController')

router.get('/', contactController.getAll)

module.exports = router