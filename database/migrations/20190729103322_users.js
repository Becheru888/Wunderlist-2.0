
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
      users.increments('userId');
      users.string('firstName', 128).notNullable();
      users.string('lastName', 128).notNullable();  
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
