class Controller{
  constructor(model){
    const db = require('../util/models')

    this.model = db[model]
  }

  getAll(request, response, next) {
    try{
      this.model.findAll({raw: true})
                .then(data => {
                  response.status(200).json({total: data.length, data})
                })
                .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }

  getOne(request, response, next) {
    const { id } = request.params
    try{
      this.model.findOne({
        where: { id }
      })
                .then(data => {
                  if(!data) {
                    return response.json({message: 'Not found.'})
                  }
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
    const { id } = request.params
    const {name, email} = request.body
    try{
      this.model.update({name, email}, {
        where: { id }
      })
                .then(data => {
                  response.status(200).json({ data })
                })
                .catch(err => next(err))
    } catch (err) {
      next(err)
    }
  }

  delete(request, response, next) {
    const { id } = request.params
    try{
      this.model.destroy({
        where: { id }
      })
                .then(data => {
                  if(!data) {
                    return response.status(404).json({message: 'Not Found.'})
                  }
                  response.status(200).json({message: 'Done.', data})
                })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller