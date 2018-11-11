import knex from 'knex';

export const up = async (knex: knex) => {
  // adding extension which will allow us to generate uuid
  await knex.raw('create extension if not exists "uuid-ossp"');

  return Promise.all([
    knex.schema.createTable('users', (t) => {
      t.uuid('id')
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      t.string('firstName').notNullable();
      t.string('lastName').notNullable();
      t.string('email').notNullable();
      t.timestamps(true, true);
    }),
  ]);
};

export const down = async (knex: knex) => {
  await knex.schema.dropTable('users');

  await knex.raw('drop extension if exists "uuid-ossp"');
};
