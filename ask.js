const prompt = require('prompt')

module.exports = question => {
  console.log(question)
  return new Promise((res) => {
    prompt.start()
    prompt.get(['reponse'], (_, { reponse = '' }) => res(reponse))
  })
}