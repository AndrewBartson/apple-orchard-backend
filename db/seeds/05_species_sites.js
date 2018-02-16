let input = require('../seed_data/species_sites_input.js')

exports.seed = function(knex, Promise) {
  return knex('species_sites').del()
    .then(function () {
      return knex('species_sites').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('species_sites_id_seq', (SELECT MAX(id) FROM species_sites));`
    );
  })
};
