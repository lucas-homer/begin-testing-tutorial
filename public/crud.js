/** POST /todos */
export async function create(params) {
  let req = await fetch('/todos', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return req.json()
}

/** GET /todos */
export async function read() {
  let req = await fetch('/todos')
  return req.json()
}

/** PUT /todos/:key */
export async function update(params) {
  let req = await fetch(`/todos/${params.key}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return req.json()
}

/** DELETE /todos/:key */
export async function destroy({key}) {
  let req = await fetch(`/todos/${key}`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json'
    }
  })
  return req.json()
}
