import { signIn, signUp } from "./action/auth/sign";

const resolvers = {
  Query: {
    firstSchema: () => "hi GraphQL + Node.js"
  },
  Mutation: {
    SignUp: (_, { name, id, password, email }) =>
      signUp({ name, id, password, email }),
    SignIn: (_, { id, password }) => signIn({ id, password })
  }
};

export default resolvers;
