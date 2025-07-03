export const validateForm = (email, password) => {
  // if (name != null) {
  //   const isNameValid = name.length > 0;
  //   if (!isNameValid) return "Name is not valid";
  // }

  const isEMailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEMailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
