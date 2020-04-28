let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')
let data = require('@begin/data')

async function destroy(req) {
  let table = `todos-${req.session.account.id}`
  let key = req.params.key
  await data.destroy({table, key})
}

exports.handler = arc.http.async(auth, destroy, read)
