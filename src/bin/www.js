const bodyParser = require('body-parser')
const router = require('../routes')

const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use('/', router)

module.exports = app

