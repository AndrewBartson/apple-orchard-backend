
exports.up = function(knex, Promise) {
  return knex.schema.createTable('varieties', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('icon').notNullable().defaultTo('icon.jpg');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('species_id').references('id').inTable('species');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('varieties');
};
