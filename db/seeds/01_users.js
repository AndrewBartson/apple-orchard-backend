let input = require('../seed_data/users_input.js')

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
    );
  })
};
