
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', task => {
        task.increments('task_id');
        task.string('Task_name', 500).notNullable()
        task.integer('assignee_id').references('userId').inTable('users')
        task.boolean('completed').notNullable()
        task.boolean('starred').notNullable()
        task.timestamp('created_at').defaultTo(knex.fn.now());

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks');
};
