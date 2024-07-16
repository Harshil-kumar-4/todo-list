let tasks = [];

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskDataInput = document.getElementById('taskDataInput');
    let task = taskInput.value.trim();
    let taskData = taskDataInput.value.trim();
    if (task === '' || taskData === '') return;

    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');
    listItem.innerHTML = `${task} <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;
    listItem.onclick = () => listItem.classList.toggle('completed');

    tasks.push({ task, taskData });

    taskList.appendChild(listItem);
    taskInput.value = '';
    taskDataInput.value = '';
}

function removeTask(button) {
    const listItem = button.parentNode;
    const taskIndex = Array.prototype.indexOf.call(listItem.parentNode.children, listItem);
    tasks.splice(taskIndex, 1);
    listItem.remove();
}

function clearCompletedTasks() {
    let taskList = document.getElementById('taskList');
    let completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        const taskIndex = Array.prototype.indexOf.call(task.parentNode.children, task);
        tasks.splice(taskIndex, 1);
        task.remove();
    });
}

// Add event listener to task list items
document.getElementById('taskList').addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'LI') {
        const taskIndex = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
        event.target.title = tasks[taskIndex].taskData;
    }
});

document.getElementById('taskList').addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.title = '';
    }
});

const animatedText = document.getElementById('animated-text');
const phrases = [
  'add what ever task you want  ',
  'tap on the task after you completed   ',
  'click on the clear button   ',
  'or you can remove them individually   '
];

let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let typingInterval;

function typePhrase() {
  const phrase = phrases[currentPhraseIndex];
  const character = phrase[currentCharacterIndex];

  animatedText.textContent += character;

  currentCharacterIndex++;

  if (currentCharacterIndex >= phrase.length) {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    currentCharacterIndex = 0;
    animatedText.textContent = '';
  }
}

typingInterval = setInterval(typePhrase, 150);