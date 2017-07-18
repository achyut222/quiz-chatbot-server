const firebase = require('../firebase')

describe.skip('connect to firebase', () => {
  test('connect to firebase', () => {})
})

describe.skip('number of questions', () => {
  test('get number of questions', () => {
    expect.assertions(1)
    return expect(firebase.getNumberOfQuestions()).resolves.toBeDefined()
  })
})

describe.skip('questions from firebase', () => {
  test('get all questions keys from firebase', () => {
    expect.assertions(1)
    return expect(firebase.getQuestionsFromFirebase()).resolves.not.toBeNull()
  })
})
