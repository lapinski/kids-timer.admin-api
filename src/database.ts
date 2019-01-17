import 'reflect-metadata';
import path from 'path';
import * as typeorm from 'typeorm';

import { getDatabaseConfig } from './config';
import { logger } from './logging';

const dbConfig = getDatabaseConfig();

export async function createConnection() {

  return typeorm.createConnection({
    type: <any>dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.databaseName,
    entities: [
      path.join(__dirname, 'models', 'db'),
    ],
    logging: dbConfig.enableLogging,
  });
}

export async function getRepository<T>(
  entityDefinition: typeorm.ObjectType<T>): Promise<typeorm.Repository<T>> {
  let connection;

  try {
    connection = await createConnection();
  } catch (error) {
    logger.error('An error occurred creating a connection to get a repository.', {
      error,
      entityDefinition,
    });
    throw error;
  }

  return connection.getRepository(entityDefinition);
}
