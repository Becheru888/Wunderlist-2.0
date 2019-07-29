const db = require("../database/dbConfig")

module.exports = {
    findTaskAssign,
    getUsers,
    getTasks,
    findById
}

//// ---- HELPERS FOR TASKS


function getTasks() {
    return db('tasks')
}

function findTaskAssign() {
    return db("users")
        .select("users.firstName", "tasks.task_name", "tasks.completed", "tasks.starred", "tasks.created_at")
        .innerJoin("tasks", "users.userId", "tasks.assignee_id");
}



//// ---- HELPERS FOR USERS


function getUsers() {
    return db('users')
}

// async function addUser(user) {
//     const [id] = await db("users").insert(user);

//     return findById(id);
//   }

function findById(id) {
    return db('users')
      .select('id', 'username')
      .where({id})
      .first();
  }