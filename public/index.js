import {create, read, update, destroy} from './crud.js'

// main render function
async function render(payload) {

  if (payload.error === 'not_authorized') {
    let main = document.getElementsByTagName('main')[0]
    main.innerHTML = `<a href=${payload.href}>${payload.message}</a>`
    return;
  }
  
  let html = `
    <a href=/logout>logout</a>
    <input type=text id=new-todo placeholder="todo text here">
  `

  for (let todo of payload.todos) {
    html += `<li>
      <input type=checkbox class=js-todo-complete data-key=${todo.key} ${todo.complete? 'checked' : ''}>
      <span>${todo.text}</span>
      <button class=js-todo-destroy data-key=${todo.key}>x</button>
    </li>`
  }

  // render markup
  let main = document.getElementsByTagName('main')[0]
  main.innerHTML = html

  // listen for enter
  let text = document.getElementById('new-todo')
  text.addEventListener('keyup', enter)
  text.focus()

  // listen for checkbox change
  for (let i of document.querySelectorAll('.js-todo-complete')) {
    i.addEventListener('change', change)
  }

  // listen for destroy
  for (let i of document.querySelectorAll('.js-todo-destroy')) {
    i.addEventListener('click', click)
  }
}

/** create a todo */
async function enter(event) {
  if (event.key === 'Enter') {
    let value = event.target.value
    let res = await create({text: value})
    await render(res)
  }
}

/** toggle todo complete */
async function change(event) {
  let key = event.target.dataset.key
  let complete = event.target.checked
  let res = await update({key, complete})
  await render(res)
}

/** destroy todo */
async function click(event) {
  let key = event.target.dataset.key
  let res = await destroy({key})
  await render(res)
}

// run the program
try {
  (async function main() {
    let res = await read()
    await render(res)
  })()
} 
catch(err) {
  console.log('err', err)
}
