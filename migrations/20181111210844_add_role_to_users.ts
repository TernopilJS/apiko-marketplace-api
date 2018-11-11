import knex from 'knex';

export const up = async (knex: knex) => {
  await knex.schema.table('users', (t) => {
    t.enum('role', ['admin', 'user']).defaultTo('user');
  });
};

export const down = async (knex: knex) => {
  return knex.schema.table('users', (t) => {
    t.dropColumn('role');
  });
};
