import knex from 'knex';
import knexFile from '../../../knexfile';

type Env = 'development' | 'production';

const environment: Env = process.env.NODE_ENV as Env || 'development';
const config: knex.Config = knexFile[environment];

const client = knex(config);

export default client;
