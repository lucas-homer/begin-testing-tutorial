let tiny = require('tiny-json-http')
let test = require('tape')
let sandbox = require('@architect/sandbox')
let end

test('start', async t=> {
  t.plan(1)
  end = await sandbox.start()
  t.ok(true, 'started')
})

test('get /lists not authenticated', async t=> {
  t.plan(1)
  try {
    let url = 'http://localhost:3333/todos'
    let result = await tiny.get({url})
    console.log(result)
  }
  catch(e) {
    t.ok(e.statusCode === 403, 'not auth')
  }
})


test('end', async t=> {
  t.plan(1)
  await end()
  t.ok(true, 'ended')
})
