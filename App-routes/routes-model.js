const db = require("../database/dbConfig")

module.exports = {
    findTaskAssign    
}


function findTaskAssign() {
    return db("users")
    .select("users.firstName", "tasks.Task_name")
    .innerJoin("tasks", "users.userId", "tasks.assignee_id");
  }



