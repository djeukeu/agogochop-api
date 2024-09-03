import { GraphQLError } from 'graphql';

export class MyError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'MY_ERROR_CODE',
      },
    });

    Object.defineProperty(this, 'name', { value: 'MyError' });
  }
}
