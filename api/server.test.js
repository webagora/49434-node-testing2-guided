// even if you are only testing a route
// even if you are testing only a single endpoint
// IMPORT THE WHOLE SERVER.JS!!!!!!

const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('GET /hobbits', () => {
  test.todo('[7] returns a status 200 OK')
    
})
describe('POST /hobbits', () => {
  test.todo('[8] returns a status 201 Created')
  test.todo('[9] returns the new hobbit')
})