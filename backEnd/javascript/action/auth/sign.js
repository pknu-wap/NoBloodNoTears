export const signIn = ({ id, password }) => {
  console.log({ id, password });
  return {
    message: "부경위키에 오신 것을 환영합니다.",
    success: true
  };
};

export const signUp = ({ name, id, password, email, token }) => {
  console.log({ name, id, password, email });
  return {
    message: "부경위키에 오신 것을 환영합니다.",
    success: true
  };
};
