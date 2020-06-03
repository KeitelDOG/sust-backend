
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable().index();
    table.string('email', 100).notNullable().index();
    table.string('password', 128);
    table.integer('type').notNullable().default(3);
    table.string('phone', 100);
    table.string('business_name', 100).notNullable().index();
    table.boolean('confirmed').notNullable().index().default(false);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
