export enum OpenAPIType {
  Array = 'array',
  Boolean = 'boolean',
  Integer = 'integer',
  Number = 'number',
  Object = 'object',
  String = 'string',
}

export interface RouteSchema {
  description: string;
  body?: {
    type: OpenAPIType,
    properties?: {
      [property:string]: {
        type: OpenAPIType,
        description?: string,
      },
    },
  };
  params?: {
  };
  response: {
    [response:number]: {
      description?: string,
      type?: OpenAPIType,
      items?: object,
      properties?: {
        [property:string]: {
          type: OpenAPIType,
          description?: string,
        },
      },
    },
  };
}
