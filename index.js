function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    if (task === '') return;

    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');
    listItem.innerHTML = `${task} <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;
    listItem.onclick = () => listItem.classList.toggle('completed');
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function removeTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}

function clearCompletedTasks() {
    let taskList = document.getElementById('taskList');
    let completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
}