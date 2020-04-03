const request = require('supertest')
const app = require('../src/bin/www')

describe('GET /', () => {
  it('Should be return 200 as status code', async () => {
    expect.assertions(1)

    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })
})

describe('GET /contacts', () => {
  it('Should be return 200 as status code', async () => {
    expect.assertions(1)

    const res = await request(app).get('/contacts')
    expect(res.statusCode).toEqual(200)
  })
})