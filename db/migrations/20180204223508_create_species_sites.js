
exports.up = function(knex, Promise) {
  return knex.schema.createTable('species_sites', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('icon').notNullable().defaultTo('icon.jpg');
    table.timestamp('date_planted').defaultTo('2011-01-01 00:00:46.488796-08');
    table.string('end_date');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    // set up foreign keys
    table.integer('species_id').references('id').inTable('species');
    table.integer('variety_id').references('id').inTable('varieties');
    table.integer('site_id').references('id').inTable('sites');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('species_sites');
};
