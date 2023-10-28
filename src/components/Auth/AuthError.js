const FIREBASE_AUTH_ERRORS = {
  "auth/wrong-password": `Invalid email/password`,
  "auth/user-not-found": `No user found for provided email`,
  "auth/email-already-in-use": "Email already register, do please login",
  "auth/invalid-email": "Please Provide Valid Email",
  "auth/invalid-login-credentials": "Invalid Login Attempt/Please do signup",
  "auth/missing-password": "Please Provide Your Password",
  "auth/weak-password": "Password should be at least 6 characters",
};

export default FIREBASE_AUTH_ERRORS;
