// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Animated text
const text = "Organize your day with our To-Do List!";
let index = 0;
const animatedText = document.getElementById('animated-text');

function typeText() {
    if (index < text.length) {
        animatedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

// Function to load tasks from the server
async function loadTasks() {
    try {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        
        tasks.forEach(task => {
            const li = createTaskElement(task);
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

// Function to create a task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        ${task.content}
        <span class="additional-data">${task.additional_data || ''}</span>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;
    if (task.completed) {
        li.classList.add('completed');
    }
    li.onclick = function(e) {
        if (!e.target.classList.contains('remove-btn')) {
            toggleTaskStatus(this, task.id);
        }
    };
    return li;
}

// Function to add a new task
async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDataInput = document.getElementById('taskDataInput');
    const content = taskInput.value.trim();
    const additionalData = taskDataInput.value.trim();

    if (content === '') return;

    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content,
                additional_data: additionalData
            }),
        });

        const task = await response.json();
        const taskList = document.getElementById('taskList');
        const li = createTaskElement(task);
        taskList.appendChild(li);

        taskInput.value = '';
        taskDataInput.value = '';
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

// Function to toggle task status
async function toggleTaskStatus(listItem, taskId) {
    const isCompleted = listItem.classList.toggle('completed');
    try {
        await fetch(`/api/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: isCompleted }),
        });
    } catch (error) {
        console.error('Error updating task:', error);
        // Revert the UI change if the server update failed
        listItem.classList.toggle('completed');
    }
}

// Function to remove a task
async function removeTask(button) {
    const listItem = button.parentNode;
    const taskId = listItem.dataset.taskId;
    try {
        await fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE',
        });
        listItem.remove();
    } catch (error) {
        console.error('Error removing task:', error);
    }
}

// Function to clear completed tasks
async function clearCompletedTasks() {
    try {
        await fetch('/api/tasks/completed', {
            method: 'DELETE',
        });
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach(task => task.remove());
    } catch (error) {
        console.error('Error clearing completed tasks:', error);
    }
}

// Add event listener for Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});