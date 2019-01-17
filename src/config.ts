import convict from 'convict';
import * as dotenv from 'dotenv';

enum ServerEnvironment {
    Production = 'production',
    Development = 'development',
    Test = 'test',
}

enum DatabaseEngine {
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

enum LoggingLevel {
    Info = 'info',
    Debug = 'debug',
    Warn = 'warn',
    Error = 'error',
}

enum ConfigSection {
  Database = 'db',
  Logging = 'logging',
  Server = 'server',
}

interface DatabaseConfig {
  type: DatabaseEngine;
  host: string;
  port: number;
  username: string;
  password: string;
  databaseName: string;
  enableLogging: boolean;
  enableSync: boolean;
}

interface LoggingConfig {
  level: LoggingLevel;
  filename: string;
}

interface ServerConfig {
  env: ServerEnvironment;
  port: number;
  ip: string;
}

dotenv.config();
const config = convict({
  db: {
    type: {
      doc: 'Database engine type',
      format: [
        DatabaseEngine.Mysql,
        DatabaseEngine.Postgres,
        DatabaseEngine.MariaDb,
      ],
      default: DatabaseEngine.Postgres,
      env: 'TYPEORM_CONNECTION',
    },
    host: {
      doc: 'Database Hostname',
      format: String,
      default: 'localhost',
      env: 'TYPEORM_HOST',
    },
    port: {
      doc: 'Database Port',
      format: 'port',
      default: 5432,
      env: 'TYPEORM_PORT',
    },
    username: {
      doc: 'Database Username',
      format: String,
      default: undefined,
      env: 'TYPEORM_USERNAME',
    },
    password: {
      doc: 'Database Password',
      format: String,
      default: undefined,
      env: 'TYPEORM_PASSWORD',
      sensitive: true,
    },
    databaseName: {
      doc: 'Name of the database on the db host',
      format: String,
      default: 'kids-timer',
      env: 'TYPEORM_DATABASE',
    },
    enableLogging: {
      doc: 'Flag to enable database logging.',
      format: Boolean,
      default: true,
      env: 'TYPEORM_LOGGING',
    },
    enableSync: {
      doc: 'Flag to enable automatic schema syncing from entities.',
      format: Boolean,
      default: false,
      env: 'TYPEORM_SYNCHRONIZE',
    },
  },
  logging: {
    filename: {
      doc: 'Log file path',
      format: '*',
      default: 'server.log',
      env: 'LOGGING_FILEPATH',
    },
    level: {
      doc: 'Minimum logging level to include in the log file',
      format: [LoggingLevel.Debug, LoggingLevel.Info, LoggingLevel.Warn, LoggingLevel.Error],
      default: LoggingLevel.Info,
      env: 'LOGGING_LEVEL',
    },
  },
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
});
config.validate({ allowed: 'strict' });

const getDatabaseConfig = () => config.get(ConfigSection.Database);
const getLoggingConfig = () => config.get(ConfigSection.Logging);
const getServerConfig = () => config.get(ConfigSection.Server);

export {
  DatabaseEngine,
  LoggingLevel,
  ServerEnvironment,

  DatabaseConfig,
  LoggingConfig,
  ServerConfig,

  getDatabaseConfig,
  getLoggingConfig,
  getServerConfig,
};
