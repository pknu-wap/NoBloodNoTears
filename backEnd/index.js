import { GraphQLServer } from "graphql-yoga";

const Server = GraphQLServer({
  type
});

Server.start(() => console.log("GraphQL Yoga Start"));
