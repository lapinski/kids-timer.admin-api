import fastify from 'fastify';
import fastifyOas from 'fastify-oas';
import { Just, Nothing } from 'purify-ts/adts/Maybe';
import { createUser, getUser, listUsers } from './controllers/users';
import { createUserSchema, getUserSchema, listUsersSchema } from './schema/users';

const port = 3000;

const app = fastify({
  logger: true,
});

app.register(fastifyOas, {
  addModels: true,
  exposeRoute: true,
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Kid\s Timer Admin API',
      description: 'REST API for the Kid\'s Timer Admin console ' +
        'and for receiving input from clients.',
      version: '0.1.0',
    },
    host: `localhost:${port}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
});

app.ready((err) => {
  if (err) throw err; // TODO: Make this more function w/o throwing an error
  // app.oas();
});

app.get(
  '/users',
  {
    schema: listUsersSchema,
  },
  listUsers,
);

app.get(
  '/users/:id',
  {
    schema: getUserSchema,
  },
  getUser,
);

app.post(
  '/users',
  {
    schema: createUserSchema,
  },
  createUser,
);

const moduleIsMain = (module:NodeModule, main:NodeModule|undefined) => module === main;

const start = (module: NodeModule,
               main:NodeModule|undefined,
               app:fastify.FastifyInstance,
               port: number) => moduleIsMain(module, main) ? Just(app.listen(port)) : Nothing;

start(module, require.main, app, port);
