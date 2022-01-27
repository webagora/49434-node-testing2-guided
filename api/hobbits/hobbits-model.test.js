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
      test.todo('[4] returns the correct Hobbit')
    })

    describe('Hobbit.insert(hobbit)', () => { 
      test.todo('[5] db updates with the new hobbit')
      test.todo('[6] resolves the newly created hobbit')
    })
  })