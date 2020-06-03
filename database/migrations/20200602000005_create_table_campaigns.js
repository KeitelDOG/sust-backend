
exports.up = function(knex, Promise) {
  return knex.schema.createTable('campaigns', function(table) {
    table.increments('id').primary();
    table.integer('post_id').unsigned();
    table.decimal('amount', 18, 2).notNullable();
    table.integer('plan').notNullable().index().default(1);
    table.string('order_code', 100).notNullable();
    table.datetime('start_date').notNullable();
    table.datetime('end_date').notNullable();

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('post_id').references('posts.id').onUpdate('CASCADE').onDelete('RESTRICT');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('campaigns');
};
