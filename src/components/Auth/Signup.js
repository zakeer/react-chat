import React, { Component } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../services/firebase";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  handleSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      if (!email || !password) {
        throw new Error("Please provide a valid email and password.");
      }
      if (!isValidEmail(email)) {
        throw new Error("Invalid email format.");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters.");
      }
      await createUserWithEmailAndPassword(getAuth(firebaseApp), email, password);
      this.setState({ error: null });
    } catch (error) {
      this.setState({ error: error.message });
    };

   
  };
  
  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="flex justify-center mt-16">
        <form onSubmit={this.handleSignup} className="w-96 flex flex-col gap-8">
          <h1 className="text-slate-900 text-3xl">Signup</h1>
          {error && <div classname="text-red-500">{error}</div>}
          <input
            onChange={this.onEmailChange}
            value={email}
            type="email"
            placeholder="Please provide email"
            className="w-full p-2 pl-4 border-b-2 border-slate-900 focus:outline-none"
          />
          <input
            onChange={(e) => this.setState({ password: e.target.value })}
            value={password}
            type="password"
            placeholder="Please enter password"
            className="w-full p-2 pl-4 border-b-2 border-slate-900 focus:outline-none"
          />
          <button className="w-full p-2 bg-slate-700 text-white rounded hover:bg-slate-900 mt-4 transition">
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default Signup;

function isValidEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const email = "example@email.com";
  if (emailRegex(email)) {
    console.log("Email is valid");
  } else {
    console.log("Email is not valid");
  }
  
  return emailRegex.test(email);
  
}