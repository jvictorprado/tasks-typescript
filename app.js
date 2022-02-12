var db = [];
var createTask = function (task, status) {
    var list = document.getElementById('todoList');
    list.innerHTML += "\n        <label class=\"todo__item\">\n            <input type=\"checkbox\">\n            <div>" + task + "</div>\n            <input type=\"button\" value=\"X\">\n        </label>\n    ";
};
var insertTask = function (event) {
    var key = event.key;
    if (key === 'Enter') {
        db.push({ 'task': event.target.value, 'status': '' });
        refreshScreen();
        event.target.value = '';
    }
};
var clearScreen = function () {
    document.getElementById('todoList').innerHTML = "";
};
var refreshScreen = function () {
    document.getElementById('todoList').innerHTML = "";
    db.forEach(function (item) { return createTask(item.task, item.status); });
};
//quando der enter chama o insertTask
document.getElementById('new').addEventListener('keypress', insertTask);
