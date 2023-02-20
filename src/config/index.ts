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
  migrations: [resolve(__dirname, '..', 'migrations', '*.ts')],
  entities: [resolve(__dirname, '..', 'entities', '*.ts')],
  namingStrategy: new SnakeNamingStrategy(),
  logging: true
});
