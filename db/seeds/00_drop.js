exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(() => knex('species_sites').del())
    .then(() => knex('varieties').del())
    .then(() => knex('species').del())
    .then(() => knex('sites').del())
    .then(() => knex('users').del())
};
