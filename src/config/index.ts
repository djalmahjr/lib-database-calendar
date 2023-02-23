import { resolve } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

export default new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  migrationsTableName: 'migration_execs',
  migrations: [resolve(__dirname, '..', 'migrations', '*{.ts,.js}')],
  entities: [resolve(__dirname, '..', 'entities', '*{.ts,.js}')],
  namingStrategy: new SnakeNamingStrategy(),
  logging: true
});
