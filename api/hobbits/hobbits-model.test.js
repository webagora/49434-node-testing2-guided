const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

test('NODE_ENV is correct', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  
})

describe('Hobbit model', () => {

  describe('Hobbit.getAll()', () => {

  })
})
