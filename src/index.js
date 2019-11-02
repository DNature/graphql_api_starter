import express from "express";
import { ApolloServer } from "apollo-server-express";
import connect from "./db";
import { typeDefs, resolvers } from "./graphql";
import { APP_PORT, IN_PRODUCTION } from "./config";
import { graphqlUploadExpress } from "graphql-upload";
import cors from "cors";

export default (async function() {
  try {
    await connect.then(connect => {
      console.log("Connected 🚀 To MongoDB Successfully");
    });

    const app = express();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req, res }) => ({ req, res }),
      playground: !IN_PRODUCTION
    });

    server.applyMiddleware({ app });

    app.use(
      "/graphql",

      // Uploads Folder::: // FIXME: I dont want files to be uploaded to a directory
      graphqlUploadExpress({
        maxFileSize: 10000000,
        maxFiles: 10,
        graphqlPath: "/src/photos"
      }),

      cors()
    );
    app.disable("x-powered-by");

    app.listen({ port: APP_PORT }, () => {
      console.log(
        `🚀 server running @ http://localhost:${APP_PORT}${server.graphqlPath}`
      );
    });
  } catch (err) {
    console.error(err);
  }
})();
