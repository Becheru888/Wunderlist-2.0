
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, firstName: 'Remi', lastName:'Becheru', username:'Rem662', password: 1234},
        {userId: 2, firstName: 'Jack', lastName:'Sparrow', username:'Jack00', password: 1234},
        {userId: 3, firstName: 'John', lastName:'Snow', username:'Snow888', password: 1234},
      ]);
    });
};
