
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('id').primary();
    table.string('name', 50).notNullable().index();
    table.string('description', 255).notNullable();

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
