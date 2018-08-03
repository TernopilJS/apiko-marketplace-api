import knex from 'knex';

const client = knex({
  client: 'postgresql',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'new_password',
    database : 'perun-site',
  },
  migrations: {
    tableName: 'migrations',
  },
});

export default client;
