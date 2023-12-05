const todoForm = document.getElementById("todoForm");
const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const todoInput = document.getElementById("todoList");

async function addTodo() {
    const title = titleInput.value;
    const description = descriptionInput.value;

    if (!title) {
        alert('Please enter a task');
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/add-todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
            }),
        });

        const data = await response.json();
        console.log("Response data:", data);

        if (data.sucess === true) {

            const listItem = document.createElement("li");
            listItem.textContent = `${title} - ${description}`;
            todoList.appendChild(listItem);

            titleInput.value = "";
            descriptionInput.value = "";
        } else {
            alert("Failed to add todo. Please try again.");
        }
    } catch (error) {
        console.error("Error adding todo:", error);
        alert("An error occurred. Please try again.")

    }
}
