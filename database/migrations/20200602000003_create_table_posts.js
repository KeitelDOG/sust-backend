
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.string('title', 100).notNullable().index();
    table.string('web_url', 255).notNullable().index();
    table.string('web_video', 255).notNullable().index();
    table.string('description', 200).notNullable();

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('RESTRICT');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
