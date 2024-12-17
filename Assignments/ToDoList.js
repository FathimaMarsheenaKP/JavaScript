function addTask() {
    let taskInput = document.querySelector(".task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const taskList = document.querySelector('.taskList');
    const textField = document.createElement('input');
    textField.className = 'display';
    textField.type = 'text';
    textField.value = taskText;
    textField.readOnly = true;

    const completeButton = document.createElement('button');
    completeButton.className = 'cmplt';
    completeButton.textContent = "Mark As Complete";

    completeButton.addEventListener('click', () => {
        moveToCompletedTasks(taskText);

        completeButton.textContent = "Completed";
        completeButton.style.backgroundColor = "green";
        completeButton.disabled = true;
    });

    taskList.appendChild(textField);
    taskList.appendChild(completeButton);

    const lineBreak = document.createElement('br');
    taskList.appendChild(lineBreak);

    taskInput.value = "";
}

function moveToCompletedTasks(taskText) {
    const completeList = document.querySelector('.completeList');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    completeList.appendChild(listItem)
}