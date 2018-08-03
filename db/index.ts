import knex from 'knex';
import knexFile from '../knexfile';

const environment: string = process.env.NODE_ENV || 'development';
const config: knex.Config = knexFile[environment];

const client = knex(config);

export default client;
