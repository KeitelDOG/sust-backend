
exports.up = function(knex, Promise) {
  return knex.schema.createTable('interactions', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.integer('post_id').unsigned();
    table.integer('type').notNullable().index().default(1);
    table.integer('media_type').notNullable().default(1);
    table.string('ip_address', 100).notNullable();

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('RESTRICT');
    table.foreign('post_id').references('posts.id').onUpdate('CASCADE').onDelete('RESTRICT');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('interactions');
};
