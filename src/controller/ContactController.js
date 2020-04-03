const Controller = require('../util/genericController')

class LogController extends Controller{
  constructor(model) {
    super(model)
  }

  test() {
    console.log('test')
  }
}

module.exports = new LogController('Contacts')