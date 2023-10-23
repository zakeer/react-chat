import React, { useCallback, useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp from "../../services/firebase";
import { useHistory } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const history = useHistory();
  
  
const FIREBASE_AUTH_ERRORS = {
  "auth/wrong-password": `Invalid email/password`,
  "auth/user-not-found": `No user found for provided email`,
  "auth/email-already-in-use": "Email already register, do please login",
  "auth/invalid-email": "Please Provide Valid Email",
  "auth/invalid-login-credentials" : "Invalid Login Attempt/Please do signup",
  "auth/missing-password" : "Please Provide Your Password",
  "auth/weak-password"  : "Password should be at least 6 characters"
};


  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      if (email && password) {
        try {
          await signInWithEmailAndPassword(getAuth(firebaseApp), email, password);
          history.push('/chat-room');
        } catch (error) {
          console.log("SINGIN ERROR", error.code);
          setError(FIREBASE_AUTH_ERRORS[error.code])
        }

      }
      else {
        setError('Please enter email & password')
      }
    },
    [email, password]
  );

  return (
    <div className="flex justify-center mt-16">
      <form onSubmit={handleLogin} className="w-96 flex flex-col gap-8">
        <h1 className="text-slate-900 text-3xl">Login</h1>
        {error && <p className="text-red-600"> {error} </p>}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full p-2 pl-4 border-b-2 border-slate-900 focus:outline-none"
          placeholder="Please provide email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full p-2 pl-4 border-b-2 border-slate-900 focus:outline-none"
          placeholder="Please provide password"
        />
        <button className="w-full p-2 bg-slate-700 text-white rounded hover:bg-slate-900 mt-4 transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
