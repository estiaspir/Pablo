const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

let allTodos = [];

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    alert('hi')
    addTodo();
})

const addTodo = ()=>{
    const todoText = todoInput.value.trim();
    if(todoText.length > 0){
        allTodos.push(' ' + todoText);
        updateTodoList();
        saveTodos();
         //createTodoItem(todoText);
        todoInput.value = " "
        document.querySelector('.showme').textContent = allTodos;
    } else{
        document.querySelector('.showme').textContent = 'Please enter your info'
    }
 }

 const updateTodoList = ()=>{
    todoList.innerHTML = " ";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex)
        todoList.append(todoItem)
    })
 }

const createTodoItem = (todo, todoIndex) =>{
        let todoId = "todo-"+todoIndex
        let todoLi = document.createElement('li');
        todoLi.className = "todo"
        todoLi.innerHTML = `
        <input type="checkbox" id="${todoId}">
            <label class="custon-checkbox" for="${todoId}" >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
            fill="transparent"> <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
                </label>
                <label for="${todoId}" class="todo-text">${todo}</label>
                <button class="delete-but">
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--secondary)" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
        `
        return todoLi;
    }

    const saveTodos = ()=>{
        const todoJson = JSON.stringify(allTodos)
        localStorage.setItem("todos", todoJson)
    }

    const getTodos = ()=>{
        const todos = localStorage.getItem("todos") || "[]"
        return JSON.parse(todos)

    }

    