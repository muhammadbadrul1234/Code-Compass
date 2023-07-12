export const validateEmail = (email: string) => {
  let errors = {};
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  if (!email) {
    errors = "Email required";
  } else if (!emailRegex.test(email)) {
    errors = "Email is invalid";
  }
  return errors;
};
