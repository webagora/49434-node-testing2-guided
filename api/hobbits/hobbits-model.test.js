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
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('Hobbit model', () => {

  describe('Hobbit.getAll()', () => {
    test('returns all hobbits in table', async () => {
      // hit the db with getAll, store result
      // assert that result is [] of length 4
      const hobbits = await Hobbit.getAll()
      expect(hobbits).toHaveLength(4)
    })
    test('returned hobbits have id and name', async () => {
      const [sam] = await Hobbit.getAll()
      expect(sam).toMatchObject({ name: 'sam' })
    })
  })
})
