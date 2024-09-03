import { shield, allow } from 'graphql-shield';

import { UNAUTHENTICATED } from 'src/constants';
import { MyError } from 'src/error';
import {} from './rules';

const permissions = shield(
  {
    Query: {},
    Mutation: {},
  },
  {
    fallbackRule: allow,
    fallbackError: new MyError(UNAUTHENTICATED),
  }
);

export default permissions;
