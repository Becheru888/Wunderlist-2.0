
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', task => {
        task.increments();
        task.string('task_name', 500).notNullable()
        task.integer('assignee_id').references('id').inTable('users')
        task.boolean('completed').notNullable().defaultTo(false)
        task.boolean('starred').notNullable().defaultTo(false)
        task.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks');
};
