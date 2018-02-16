let input = require('../seed_data/varieties_input.js')

exports.seed = function(knex, Promise) {
  return knex('varieties').del()
    .then(function () {
      return knex('varieties').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('varieties_id_seq', (SELECT MAX(id) FROM varieties));`
    );
  })
};
