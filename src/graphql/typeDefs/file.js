import { gql } from "apollo-server-express";

export default gql`
  type File {
    id: ID!
    name: String
    type: String
    # path: String
  }

  extend type Query {
    getFiles: [File]
  }

  extend type Mutation {
    uploadFile(file: Upload!): File
  }
`;
