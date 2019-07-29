
exports.up = function(knex, Promise) {
    return knex.schema.createTable('task', task => {
        task.increments('list_id');
        task.string('title', 500).notNullable()
        task.integer('assignee_id').references('userId').inTable('users')
        task.boolean('completed').notNullable()
        task.boolean('starred').notNullable()
        task.timestamp('created_at').defaultTo(knex.fn.now());

    })
};

exports.down = function(knex, Promise) {
  
};
