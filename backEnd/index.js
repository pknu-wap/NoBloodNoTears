import { GraphQLServer } from "graphql-yoga";
import resolvers from "./javascript/resolvers";

const Server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers: resolvers
});

Server.start(() => console.log("GraphQL Yoga Start"));
