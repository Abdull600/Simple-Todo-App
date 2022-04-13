const addTodo = document.getElementById('add');
const inputTodo = document.getElementById('input');
const deleteTodo = document.querySelectorAll("#delete");
const todoList = document.getElementById('todo-box');


addTodo.addEventListener('click', ()=> {

    // Create new elements
    let newTodo = document.createElement("li");
    let newSpan = document.createElement('span');
    let deleteBtn = document.createElement('button')

    deleteBtn.setAttribute('id','delete');
    deleteBtn.setAttribute('class', 'delete-btn');

    //append elements

    newTodo.appendChild(newSpan);
    newTodo.appendChild(deleteBtn);

    todoList.appendChild(newTodo);

   // Add text to delete button
   deleteBtn.innerHTML = "delete";

   newSpan.innerHTML = inputTodo.value;
   inputTodo.value = "";
    
});


todoList.addEventListener('click', e=> {
    if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
})