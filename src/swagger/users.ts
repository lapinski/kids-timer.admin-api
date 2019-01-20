const userSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'user id',
    },
    first_name: {
      type: 'string',
      description: 'User\'s First Name',
    },
    last_name: {
      type: 'string',
      description: 'User\'s Last Name',
    },
    remaining: {
      type: 'integer',
      description: 'User\'s Remaining Time (in seconds)',
    },
    limit: {
      type: 'integer',
      description: 'User\'s Time limit for today',
    },
  },
};

const listUsersSchema = {
  description: 'Get a list of all users',
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: userSchema,
    },
  },
};

export {
  listUsersSchema,
};
