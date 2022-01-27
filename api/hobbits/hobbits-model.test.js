const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

test('[1] NODE_ENV is correct', () => {
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
      let hobbits
      beforeEach(async () => {
        hobbits = await Hobbit.getAll()
      })
      test('[2] returns all hobbits in table',  () => {        
        expect(hobbits).toHaveLength(4)
      })
      test('[3] returned hobbits have id and name', () => {
        expect(hobbits[0]).toMatchObject({ id: 1, name: 'sam' })
      })
    })

    describe('Hobbit.getById(id)', () => { 
      let sam, frodo
      beforeEach(async () => {
        sam = await Hobbit.getById(1)
        frodo = await Hobbit.getById(2)
      })
      test('[4] returns the correct Hobbit', () => {
        expect(sam).toMatchObject({ id: 1, name: 'sam' })
        expect(frodo).toMatchObject({ id: 2, name: 'frodo' })
      })
    })

    describe('Hobbit.insert(hobbit)', () => { 
      let bilbo = { name: 'bilbo' }
      let result
      beforeEach( async () => {
        result = await Hobbit.insert(bilbo)
      })

      test('[5] db updates with the new hobbit', async () => {
        const theNewThing = await db('hobbits')
          .where('id', 5)
          .first()
        expect(theNewThing).toMatchObject({ id: 5, name: 'bilbo' })
      })

      test.todo('[6] resolves the newly created hobbit')
    })
  })