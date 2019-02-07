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

const signUp = ({ name, id, password, email }) => {
  console.log({ name, id, password, email });
  return {
    message: "부경위키에 오신 것을 환영합니다.",
    success: true
  };
};

const signIn = ({ id, password }) => {
  console.log({ id, password });
  return {
    message: "부경위키에 오신 것을 환영합니다.",
    success: true
  };
};

export default resolvers;
