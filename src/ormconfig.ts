import config from './config';
import path from 'path';

const dbConfig = config.get('db');

const ormconfig = {
  type: <any>dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: <string>dbConfig.username,
  password: <string>dbConfig.password,
  database: dbConfig.databaseName,
  logging: dbConfig.enableLogging,
  entities: [
      path.join(__dirname, 'entities', '**', '*.ts'),
    ],
  migrations: [
      path.join(__dirname, 'migrations', '**', '*.ts'),
    ],
  cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers',
    },
};

console.log('ORMConfig');
console.log(JSON.stringify(ormconfig, undefined, 2));
console.log('\n');

export default ormconfig;
