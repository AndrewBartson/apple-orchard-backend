
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sites', function(table) {
    table.increments();
    table.decimal('lat', 10, 7 );
    table.decimal('lng', 10, 7 );
    table.integer('aspect').defaultTo(-1);
    table.integer('slope').defaultTo(-1);
    table.integer('soil_id').defaultTo(-1);
    table.integer('site_quality').defaultTo(-1);
    table.integer('section').defaultTo(-1);
    table.integer('row').defaultTo(-1);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sites');
};
