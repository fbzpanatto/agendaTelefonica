const router = require('express')()
const contacts = require('../controller/ContactController')

router.get('/', (request, response, next) => contacts.getAll(request, response, next))
router.get('/:id', (request, response, next) => contacts.getOne(request, response, next))
router.post('/', (request, response, next) => contacts.create(request, response, next))
router.patch('/:id', (request, response, next) => contacts.update(request, response, next))
router.delete('/:id', (request, response, next) => contacts.delete(request, response, next))

module.exports = router