const toDoList = [];
let userQuery;
let userTodos;

while (userQuery !== "quit") {
    userQuery = prompt("What would you like to do?", "");

    if (userQuery === "new") {
        userTodos = prompt("Enter new todo:", "");
        toDoList.push(userTodos);
    } else if (userQuery === "delete") {
        userTodos = parseInt(prompt("Enter the task number:", ""));
        toDoList.splice(userTodos, 1);
    } else if (userQuery === "list") {
        console.log("***************");
        for(let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: "${toDoList[i]}"`);
        }
        console.log("***************");
    }
}

console.log("You quit app. Thanks for using. Goodbye!");
