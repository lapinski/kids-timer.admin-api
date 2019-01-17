import convict from 'convict';
import * as dotenv from 'dotenv';

export enum ServerEnvironment {
    Production = 'production',
    Development = 'development',
    Test = 'test',
}

export enum DatabaseEngine {
    Mysql = 'mysql',
    Postgres = 'postgres',
    MariaDb = 'mariadb',
    Sqlite = 'sqlite',
    Cordova = 'cordova',
    ReactNative = 'react-native',
    Nativescript = 'nativescript',
    Sqljs = 'sqljs',
    Oracle = 'oracle',
    Mssql = 'mssql',
    Mongodb = 'mongodb',
    Expo = 'expo',
}

export enum LoggingLevel {
    Info = 'info',
    Debug = 'debug',
    Warn = 'warn',
    Error = 'error',
}

dotenv.config();

const config = convict({
  server: {
    env: {
      doc: 'The server environment',
      format: [ServerEnvironment.Production, ServerEnvironment.Development, ServerEnvironment.Test],
      default: ServerEnvironment.Development,
      env: 'NODE_ENV',
    },
    port: {
      doc: 'The server port',
      format: 'port',
      default: 8080,
      env: 'SERVER_PORT',
    },
    ip: {
      doc: 'The server ip',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'SERVER_IP',
    },
  },
  logging: {
    filename: {
      doc: 'Log file path',
      format: '*',
      default: 'server.log',
    },
    level: {
      doc: 'Minimum logging level to include in the log file',
      format: [LoggingLevel.Debug, LoggingLevel.Info, LoggingLevel.Warn, LoggingLevel.Error],
      default: LoggingLevel.Info,
    },
  },
  db: {
    type: {
      doc: 'Database engine type',
      format: [
        DatabaseEngine.Mysql,
        DatabaseEngine.Postgres,
        DatabaseEngine.MariaDb,
      ],
      // format: '*',
      default: DatabaseEngine.Postgres,
    },
    host: {
      doc: 'Database Hostname',
      format: String,
      default: 'localhost',
      env: 'DB_HOST',
    },
    port: {
      doc: 'Database Port',
      format: 'port',
      default: 5432,
      env: 'DB_PORT',
    },
    username: {
      doc: 'Database Username',
      format: String,
      default: undefined,
      env: 'DB_USER',
    },
    password: {
      doc: 'Database Password',
      format: String,
      default: undefined,
      env: 'DB_PASS',
      sensitive: true,
    },
    databaseName: {
      doc: 'Name of the database on the db host',
      format: String,
      default: 'kids-timer',
      env: 'DB_NAME',
    },
    enableLogging: {
      doc: 'Flag to enable database logging.',
      format: Boolean,
      default: true,
    },
  },
});

config.validate({ allowed: 'strict' });

export default config;
