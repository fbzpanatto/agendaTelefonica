const db = require('../models')

db.sequelize.sync()
  .then(() => process.exit(0))