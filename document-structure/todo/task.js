const form = document.querySelector('.tasks__control')
const taskInput = document.querySelector(".tasks__input");
const taskButton = document.querySelector('.tasks__add');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value.trim() !== '') {
        addTask();
        deleteTask();
    } else {
        taskInput.value = '';
    }
})

function addTask() {
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);

    taskInput.value = '';
}

function deleteTask() {
    let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    
    for(let element of taskRemove) {
        element.addEventListener('click', () => {
            element.parentElement.remove();
        })
    }
}