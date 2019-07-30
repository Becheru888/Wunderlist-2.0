const db = require("../database/dbConfig")

module.exports = {
    findTaskAssign,
    getUsers,
    getTasks,
    findUserById,
    findTaskById,
    addUser,
    addTask,
    userUpdate,
    taskUpdate,
    removeUser,
    removeTask
}

//// ---- HELPERS FOR TASKS


function getTasks() {
    return db('tasks')
}

function findTaskAssign() {
    return db("users")
        .select("users.firstName", "tasks.task_name", "tasks.completed", "tasks.starred", "tasks.created_at")
        .innerJoin("tasks", "users.id", "tasks.assignee_id");
}

async function addTask(task) {
    const [id] = await db("tasks").insert(task);

    return findTaskById(id);
}

function findTaskById(id) {
    return db('tasks')
        .select('id', 'task_name', 'assignee_id')
        .where({ id })
        .first();
}


function taskUpdate(id, changes) {
    return db('tasks')
        .where({ id })
        .update(changes)
}



function removeTask(id) {
    return db('tasks')
        .where('id', id)
        .del();
}

//// ---- HELPERS FOR USERS


function getUsers() {
    return db('users')
}


async function addUser(user) {
    const [id] = await db("users").insert(user);

    return findUserById(id);
}


function findUserById(id) {
    return db('users')
        .select('id', 'firstName', 'lastName', 'username')
        .where({ id })
        .first();
}


function userUpdate(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
}


function removeUser(id) {
    return db('users')
        .where('id', id)
        .del();
}
