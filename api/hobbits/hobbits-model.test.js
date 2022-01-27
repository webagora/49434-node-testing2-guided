const Hobbit = require('./hobbits-model')

test('NODE_ENV is correct', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
