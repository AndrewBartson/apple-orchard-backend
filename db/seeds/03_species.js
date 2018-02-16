let input = require('../seed_data/species_input.js')

exports.seed = function(knex, Promise) {
  return knex('species').del()
    .then(function () {
      return knex('species').insert(input)
    })
    .then(() => {
      return knex.raw(
      `SELECT setval('species_id_seq', (SELECT MAX(id) FROM species));`
    );
  })
};
