import fastify from 'fastify';
import { Just, Nothing } from 'purify-ts/adts/Maybe';
import { swagger, getSwaggerOptions } from './middleware/swagger';
import { listUsers } from './controllers/users';
import { listUsersSchema } from './swagger/users';

const port = 3000;

const app = fastify({
  logger: true,
});

app.register(swagger, getSwaggerOptions(`locahost:${port}`));

app.ready((err) => {
  if (err) throw err; // TODO: Make this more function w/o throwing an error
  app.swagger();
});

app.route({
  method: 'GET',
  url: '/users',
  schema: listUsersSchema,
  handler: listUsers,
});

const moduleIsMain = (module:NodeModule, main:NodeModule|undefined) => module === main;

const start = (module: NodeModule,
               main:NodeModule|undefined,
               app:fastify.FastifyInstance,
               port: number) => moduleIsMain(module, main) ? Just(app.listen(port)) : Nothing;

start(module, require.main, app, port);
