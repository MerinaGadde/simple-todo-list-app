document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskContent = input.value.trim();


        if (taskContent !== "") {
            addTask(taskContent);
            input.value = ""; // Clear the input field after adding the task
        }
    });

    function addTask(content) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task"); // Change class to "task"
        taskDiv.innerHTML = `
            <div class="content">
                <input type="text" class="text" value="${content}" readonly>
            </div>
            <div class="actions">
               
                <button class="delete">Done</button>
            </div>
        `;
        taskList.appendChild(taskDiv);

        // Add event listener for delete button
        const deleteButton = taskDiv.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
            taskDiv.remove(); // Remove the task from the DOM
        });

}

});