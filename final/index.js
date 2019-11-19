import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connect from './src/db';
import { typeDefs, resolvers } from './src/graphql';
import { APP_PORT, IN_PRODUCTION } from './src/config';
// import multer from 'multer';
import path from 'path';
import bodyParser from 'body-parser';

export default (async function() {
  try {
    await connect.then(connect => {
      console.log('Connected 🚀 To MongoDB Successfully');
    });

    const app = express();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req, res }) => ({ req, res }),
      playground: IN_PRODUCTION
    });

    app.disable('X-Powered-By');
    // app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
    app.use(bodyParser.json()); // application/json
    app.use('/files', express.static(path.join(__dirname, 'files')));
    // app.use('/images', express.static(path.join(__dirname, 'images')));
    // app.use(express.static('build'));
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
      );
      if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
      }
      next();
    });

    // start server
    server.applyMiddleware({ app });
    app.listen({ port: APP_PORT }, () => {
      console.log(`🚀 server running @ http://localhost:${APP_PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
