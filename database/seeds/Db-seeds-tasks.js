
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_name: 'Build a server with node & express', assignee_id: 1, completed: false, starred: false},
        {id: 2, task_name: 'Use only LESS', assignee_id: 2, completed: false, starred: false},
        {id: 3, task_name: 'Create a react app', assignee_id: 1, completed: false, starred: false}
      ]);
    });
};
