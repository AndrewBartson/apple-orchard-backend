
exports.up = function(knex, Promise) {
  return knex.schema.createTable('species', function(table) {
    table.increments();
    table.string('common_name').notNullable();
    table.string('genus').notNullable();
    table.string('species_name').notNullable();
    table.string('icon').notNullable().defaultTo('icon.jpg');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('species');
};
