function addTask(){
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete');
    deleteButton.onclick = function()
    {
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';
}