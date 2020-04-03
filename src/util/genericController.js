const db = require('../util/models')

console.log(db.Contacts)

class Controller{
  constructor(model){
    this.model = db[model]
  }

  getAll(request, response, next) {
    try{
      this.model.findAll()
                .then(data => {
                  response.status(200).json({total: data.length, data: data})
                })
                .catch(err => next(err))
    } catch (err) {
      next(err)
    }
  }

  getOne(request, response, next) {
    const { id } = request.body
    try{
      this.model.findOne({
        where: { id: id},
        order: [['id', 'ASC']]
      })
                .then(data => {
                  response.status(200).json({ data })
                })
                .catch(err => next(err))
    } catch (err) {
      next(err)
    }
  }

  create(request, response, next) {
    try{
      this.model.create(request.body)
                .then(data => {
                  response.status(201).json({ data })
                })
                .catch(err => next(err))
    } catch (err) {
      next(err)
    }
  }

  update(request, response, next) {

  }

  delete(request, response, next) {

  }
}

module.exports = Controller