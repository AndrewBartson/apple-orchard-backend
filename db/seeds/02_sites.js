let input = require('../seed_data/sites_input.js')

exports.seed = function(knex, Promise) {
  return knex('sites').del()
  .then(function () {
    return knex('sites').insert(input)
  })
  .then(() => {
    return knex.raw(
  `SELECT setval('sites_id_seq', (SELECT MAX(id) FROM sites));`
  );
})
};
