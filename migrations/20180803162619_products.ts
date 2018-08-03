import knex from 'knex';

export const up = (knex: knex) => Promise.all([
  knex.schema.createTable('products', (table) => {
    table.increments('id').primary().unique();
    table.string('title').notNullable()
    table.string('description').notNullable();
    table.string('image').notNullable();
    table.float('price').notNullable();
    table.timestamps()
  }),
]);

export const down = (knex: knex) => Promise.all([
  knex.schema.dropTable('products'),
]);