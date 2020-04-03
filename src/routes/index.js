const contact = require('./contact')

const router = require('express')()

router.get('/', (req, res) => {
  res.json({
    login: 'http://localhost:8080/login', //TODO
    contact: 'http://localhost:8080/contacts'
  })
})

router.use('/contacts', contact)

module.exports = router