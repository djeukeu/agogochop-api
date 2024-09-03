import { gql } from 'graphql-tag';

const typeDefs = gql`
  scalar Upload

  type Query {
    getUserInfo(email: String!): User
  }

  type Mutation {
    saveUserInfo(firstname: String!, lastname: String!, email: String!): User
  }

  type User {
    id: ID!
    firstname: String
    lastname: String
    email: String
  }
`;

export default typeDefs;
