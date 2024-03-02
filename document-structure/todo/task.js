const form = document.querySelector('.tasks__control')
const taskInput = document.querySelector(".tasks__input");
const taskButton = document.querySelector('.tasks__add');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value) {
        AddElement();
        DeleteElement();
    }
})

function AddElement() {
    let taskInputText = taskInput.value;

    let task = document.createElement('div');
    task.setAttribute('class', 'task');

    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'task__title')
    taskTitle.innerHTML = taskInputText;

    let taskRemove = document.createElement('a');
    taskRemove.setAttribute('class', 'task__remove');
    taskRemove.innerHTML = '&times;';

    task.appendChild(taskTitle);
    tasksList.appendChild(task);
    task.appendChild(taskRemove);

    taskInput.value = '';
}

function DeleteElement() {
    let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    
    taskRemove.forEach((element) => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
        })
    })
}