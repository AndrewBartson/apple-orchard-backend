
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments();
    table.string('title').notNullable().defaultTo('no title');
    table.string('content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('author_id');
    table.boolean('isVerified').defaultTo(false);
    // set up foreign keys
    table.integer('user_id').references('id').inTable('users');
    table.integer('species_site_id').references('id').inTable('species_sites');
    table.integer('site_id').references('id').inTable('sites');
    table.integer('species_id').references('id').inTable('species');
    table.integer('variety_id').references('id').inTable('varieties');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
