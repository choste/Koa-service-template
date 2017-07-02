'use strict'

const api = require('../api/hello')
const assert = require('assert')
const Koa = require('koa')
const request = require('supertest')

const app = new Koa();

describe('hello api', function() {
  let server    

  before(function() {
    app.use(api)
    server = app.listen(3000)
  })

  after(function() {
    server.close.bind(server)
  })

  it('Sets the context body to Hello World', async () => {
    let res = await request(server)
      .get('/')
      .expect(200)

    assert.equal(res.text, 'Hello World')  
  })
})
