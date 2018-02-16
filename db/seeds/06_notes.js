let input = require('../../workspace/notes_input.js')

exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return knex('notes').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('notes_id_seq', (SELECT MAX(id) FROM notes));`
    );
  })
};
