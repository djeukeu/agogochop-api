import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginSubscriptionCallback } from '@apollo/server/plugin/subscriptionCallback';
import { createServer } from 'http';
import { applyMiddleware } from 'graphql-middleware';
import { expressMiddleware } from '@apollo/server/express4';

import config from 'src/config';
import { app } from 'src/services/express';
import { Prisma } from 'src/services/prisma';
import healthcheck from 'src/routes/healthcheck';
import schema from './schema';
import permissions from './permissions';

const startServer = async () => {
  const httpServer = createServer(app);

  const prisma = new Prisma();
  await prisma.start();
  const secureSchema = applyMiddleware(schema, permissions);

  const server = new ApolloServer({
    schema: secureSchema,
    introspection: config.env !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginSubscriptionCallback()],
    csrfPrevention: true,
    cache: 'bounded',
  });

  await server.start();

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req = app.request }) => ({
        req,
      }),
    })
  );

  app.get('/health', healthcheck);

  new Promise<void>((resolve) => httpServer.listen({ port: config.port }, resolve))
    .then(() => {
      console.log(`🚀 Agogochop Server running on port: ${config.port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

startServer();
