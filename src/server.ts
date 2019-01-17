import errorhandler from 'errorhandler';

import app from './app';
import { getServerConfig, ServerEnvironment } from './config';
import { addTransport, getConsoleTransport, getConsoleFormat } from './logging';

const serverConfig = getServerConfig();

app.set('env', serverConfig.env);
app.set('port', serverConfig.port);
app.set('host', serverConfig.ip);

/**
 * Error Handler. Provides full stack - remove for production
 */
if (serverConfig.env !== ServerEnvironment.Production) {
  app.use(errorhandler());
  addTransport(getConsoleTransport(getConsoleFormat()));
}

const server = app.listen(app.get('port'), app.get('host'), () => {
  console.log(
        '\tApp is running at http://%s:%d in %s mode',
        app.get('host'),
        app.get('port'),
        app.get('env'),
    );
  console.log('\tPress CTRL-C to stop\n');
});

export default server;
