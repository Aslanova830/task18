function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        let li = document.createElement('li');
        li.innerHTML = taskInput.value + '<button class="cursor-pointer p-[5px;10px] text-white rounded bg-blue-700" onclick="removeTask(this)"><i class="fa-solid fa-trash"></i></button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    let li = button.parentNode;
    li.parentNode.removeChild(li);
}