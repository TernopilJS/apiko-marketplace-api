import knex from 'knex';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

type KnexConfig = {
  development: knex.Config,
  production: knex.Config,
  staging: knex.Config,
};

const config: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'apiko-marketplace',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'apiko-marketplace',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
};

export default config;
module.exports = config;
