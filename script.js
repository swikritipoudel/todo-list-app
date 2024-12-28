let task = document.querySelector(".task")
    let addtask = document.querySelector(".addtask")
    let tasklist = document.querySelector(".tasklist")
    let deleteMarkedBtn= document.querySelector(".delete-btn")

    function addTodo() {
        let tasks = task.value
        if (tasks === "") {
            alert("Please enter task");
            return;
        }
    



        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        let label = document.createElement("label");
        label.textContent = tasks;

        let taskContainer = document.createElement("div")
        taskContainer.classList.add("task-container")



        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", () => {
            taskContainer.remove()
        });

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskContainer.classList.add("done")
            }
            else {
                taskContainer.classList.remove("done")
            }
        })

        taskContainer.appendChild(checkbox)
        taskContainer.appendChild(label);
        taskContainer.appendChild(deleteButton);
        tasklist.appendChild(taskContainer);

        task.value = ""
    }



    addtask.addEventListener("click", addTodo)

    task.addEventListener("keydown",(event)=>{
        if (event.key === "Enter"){
            addTodo();
        }
    })

    deleteMarkedBtn.addEventListener("click", () => {
        let tasks = document.querySelectorAll(".task-container");
        tasks.forEach((task) => {
            let checkbox = task.querySelector(".task-checkbox");
            if (checkbox && checkbox.checked) {
                task.remove();
            }
        });
    });
