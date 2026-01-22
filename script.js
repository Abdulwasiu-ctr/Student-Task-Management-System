let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    if (taskInput.value === "") {
        alert("Task cannot be empty");
        return;
    }

    tasks.push({ name: taskInput.value, completed: false });
    taskInput.value = "";
    displayTasks();
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.name;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.onclick = () => completeTask(index);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTask(index);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
