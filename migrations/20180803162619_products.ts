import knex from 'knex';

export const up = async (knex: knex) => {
  // adding extension which will allow us to generate uuid
  await knex.raw('create extension if not exists "uuid-ossp"');

  return Promise.all([
    knex.schema.createTable('products', (t) => {
      t.uuid('id')
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      t.string('title').notNullable();
      t.string('description').notNullable();
      t.string('image').notNullable();
      t.float('price').notNullable();
      t.timestamps(true, true);
    }),
  ]);
};

export const down = async (knex: knex) => {
  await knex.schema.dropTable('products');

  await knex.raw('drop extension if exists "uuid-ossp"');
};
