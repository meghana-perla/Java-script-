
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask()
{
    const taskText = taskInput.value.trim();
    if(taskTest === ''){
        alert('Please enter a task');
    return;
    }
    // listitem element
    const li = document.createElement('li');
    li.textContent = taskText;

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // delete task
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // add delete button to list item
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // clear input
    taskInput.value = '';
}

    // attach the function to the add button
    addTaskBtn.addEventListener('click', addTask);

    // optionally, you can also add the task when the user presses Enter
    taskInput.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            addTask();
        }
    });