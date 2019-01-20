import fastifySwagger from 'fastify-swagger';

const getSwaggerOptions = (hostname:string = 'locahost') => ({
  exposeRoute: true,
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Kid\s Timer Admin API',
      description: 'REST API for the Kid\'s Timer Admin console ' +
        'and for receiving input from clients.',
      version: '0.1.0',
    },
    host: hostname,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
});

export {
  fastifySwagger as swagger,
  getSwaggerOptions,
};
