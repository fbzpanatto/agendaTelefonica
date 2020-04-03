const Controller = require('../util/genericController')

class ContactController extends Controller{
  constructor(model) {
    super(model)
  }

  testando(){
    console.log('teste')
  }
}

const contactController = new ContactController('Contacts')

module.exports = {
  contactController
}