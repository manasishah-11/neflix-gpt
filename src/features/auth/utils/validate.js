export function validateAuthForm(showSignInForm, email, password, name) {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordStrong =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );

  let errors = ["", "", ""];

  if (!isEmailValid) {
    errors[0] = "Email provided is invalid";
  }
  if (!isPasswordStrong) {
    errors[1] = "Password provided is weak";
  }

  if (!showSignInForm) {
    const isValidFullName = /^[A-Z][a-z0-9]+(?: [A-Z][a-z0-9]+)+$/.test(name);
    if (!isValidFullName) {
      errors[2] = "Full name should have 4 or more characters";
    }
  }

  let isFormValid = errors[0] === "" && errors[1] === "" && errors[2] === "";

  return isFormValid || errors;
}
