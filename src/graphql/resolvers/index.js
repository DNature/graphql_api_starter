import usersResolvers from "./users";

// exports both Queries and mutations
export default {
  Query: {
    ...usersResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation
  }
};
