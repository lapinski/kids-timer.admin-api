import convict from 'convict';
import * as dotenv from 'dotenv';

export enum ServerEnvironment {
    Production = 'production',
    Development = 'development',
    Test = 'test',
}

dotenv.config();

const config = convict({
    server: {
        env: {
            doc: 'The server environment',
            format: [ ServerEnvironment.Production, ServerEnvironment.Development, ServerEnvironment.Test ],
            default: ServerEnvironment.Development,
            env: 'NODE_ENV'
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
        }
    }
});

config.validate({ allowed: 'strict' });

export default config;
