// SELECTORS
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
// console.log(todoButton, todoInput)
// EVENT LISTENERS
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkDelete)
filterOption.addEventListener('click', filterTodo)


// FUNCTIONS
function addTodo(e) {
    e.preventDefault()
    // CREATE DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // CREATE LI
    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item')
    todoItem.innerText = todoInput.value
    todoDiv.appendChild(todoItem)
    // CREATE COMPLETED BUTTON
    const completeButton = document.createElement('button')
    completeButton.classList.add('complete-btn')
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completeButton)
    // CREATE TRASH BUTTON
    const trashButton = document.createElement('button')
    trashButton.classList.add('trash')
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(trashButton)
    // ADD TODO
    todoList.appendChild(todoDiv)
    // CLEAR INPUT VALUE
    todoInput.value = ''
}

function checkDelete(e) {
    e.preventDefault()
    const todoItem = e.target.parentElement
    // console.log(todoItem)
    if (todoItem.classList[0] === 'complete-btn') {
        todoItem.parentElement.classList.toggle('completed')
    } else if (todoItem.classList[0] === 'trash') {
        todoItem.parentElement.classList.add('fall')
        todoItem.parentElement.addEventListener('transitionend', function () {
            todoItem.parentElement.remove()
        })
    }
}

function filterTodo(e) {

    const todos = todoList.childNodes


    todos.forEach(function (todos) {
        console.log(todos)
        if (e.target.value === 'all') {
            todos.style.display = 'flex'
        } else if (e.target.value === 'completed') {
            if (todos.classList.contains('completed')) {
                todos.style.display = 'flex'
            } else {
                todos.style.display = 'none'
            }
        } else if (e.target.value === 'incomplete') {
            if (!todos.classList.contains('completed')) {
                todos.style.display = 'flex'
            } else {
                todos.style.display = 'none'
            }
        }

    })
}