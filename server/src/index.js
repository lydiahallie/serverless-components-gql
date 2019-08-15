const { GraphQLServerLambda } = require("graphql-yoga");
const { prisma } = require("../prisma/generated/prisma-client");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
