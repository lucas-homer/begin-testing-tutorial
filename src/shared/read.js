let data = require('@begin/data')

module.exports = async function read(req) {
  let table = `todos-${req.session.account.id}`
  let todos = await data.get({table})
  let account = req.session.account
  delete account.token
  return {
    json: {
      account,
      todos
    }
  }
}
