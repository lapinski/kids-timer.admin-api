import { OpenAPIType, RouteSchema } from '../controllers/types';

const userProperties = {
  id: {
    type: OpenAPIType.Integer,
    description: 'user id',
  },
  first_name: {
    type: OpenAPIType.String,
    description: 'User\'s First Name',
  },
  last_name: {
    type: OpenAPIType.String,
    description: 'User\'s Last Name',
  },
  remaining: {
    type: OpenAPIType.Integer,
    description: 'User\'s Remaining Time (in seconds)',
  },
  limit: {
    type: OpenAPIType.Integer,
    description: 'User\'s Time limit for today',
  },
};

const createUserSchema:RouteSchema = {
  description: 'Create a new User',
  body: {
    type: OpenAPIType.Object,
    properties: {
      first_name: userProperties.first_name,
      last_name: userProperties.last_name,
    },
  },
  response: {
    201: {
      description: 'Created new User',
      type: OpenAPIType.Object,
      properties: userProperties,
    },
  },
};

const getUserSchema:RouteSchema = {
  description: 'Get a single User',
  params: {
    id: userProperties.id,
  },
  response: {
    200: {
      description: 'User Record',
      type: OpenAPIType.Object,
      properties: userProperties,
    },
  },
};

const listUsersSchema:RouteSchema = {
  description: 'Get a list of all users',
  response: {
    200: {
      description: 'Successful response',
      type: OpenAPIType.Array,
      items: userProperties,
    },
  },
};

export {
  createUserSchema,
  getUserSchema,
  listUsersSchema,
};
