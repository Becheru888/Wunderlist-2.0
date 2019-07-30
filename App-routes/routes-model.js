const db = require("../database/dbConfig")

module.exports = {
    findTaskAssign,
    getUsers,
    getTasks,
    findUserById,
    findTaskById,
    addUser,
    addTask
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



//// ---- HELPERS FOR USERS


function getUsers() {
    return db('users')
}

function getTasks() {
    return db('tasks')
}

async function addUser(user) {
    const [id] = await db("users").insert(user);

    return findById(id);
  }

  async function addTask(task) {
    const [id] = await db("tasks").insert(task);

    return findTaskById(id);
  }

function findUserById(id) {
    return db('users')
      .select('id', 'firstName', 'lastName', 'username')
      .where({id})
      .first();
  }

  function findTaskById(id) {
    return db('tasks')
      .select('id', 'task_name', 'assignee_id')
      .where({id})
      .first();
  }