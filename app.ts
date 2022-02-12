const db = [];

const createTask = (task:string, status:string) => {
    const list = document.getElementById('todoList');
    list.innerHTML += `
        <label class="todo__item">
            <input type="checkbox">
            <div>${task}</div>
            <input type="button" value="X">
        </label>
    `
}

const insertTask = (event) => {
    const key = event.key;
    if (key === 'Enter'){
        db.push({'task':event.target.value, 'status':''});
        refreshScreen();
        event.target.value = '';
    }
}

const clearScreen = () => {
    document.getElementById('todoList').innerHTML = "";
}
const refreshScreen = () => {
    document.getElementById('todoList').innerHTML = "";
    db.forEach(item=> createTask(item.task,item.status));
}


//quando der enter chama o insertTask
document.getElementById('new').addEventListener('keypress', insertTask);