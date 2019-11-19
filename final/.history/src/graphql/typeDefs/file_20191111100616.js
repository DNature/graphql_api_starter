import { gql } from 'apollo-server-express';

export default gql`
  type File {
    _id: ID!
    filename: String!
    mimetype: String!
    path: String!
    createdAt: String!
  }

  extend type Query {
    getFiles: [File]
  }

  extend type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
