import React, { Component } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../services/firebase";
import { withRouter } from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: '',
    };
  }

  handleSignup = async (e) => {
    e.preventDefault();

  var FIREBASE_AUTH_ERRORS = {
    "auth/wrong-password": `Invalid email/password`,
    "auth/user-not-found": `No user found for provided email`,
    "auth/email-already-in-use": "Email already register, do please login",
    "auth/invalid-email": "Please Provide Valid Email",
    "auth/invalid-login-credentials" : "Invalid Login Attempt/Please do signup",
    "auth/missing-password" : "Please Provide Your Password",
    "auth/weak-password"  : "Password should be at least 6 characters"
  };

    const { email, password } = this.state;
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(
          getAuth(firebaseApp),
          email,
          password,
        );
        this.props.history.push("/chat-room");
      } catch (e) {
        console.log(e.message);
        this.setState({ error: FIREBASE_AUTH_ERRORS[e.code] })
      }
    }
    else {
      this.setState({ error: 'Email/Password should not be empty' })
    }

  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    console.log(":: SIGNUP PROPS ::", this.props)
    const { email, password, error } = this.state;
    return (
      <div className="flex justify-center mt-16">
        <form onSubmit={this.handleSignup} className="w-96 flex flex-col gap-8">
          <h1 className="text-slate-900 text-3xl">Signup</h1>
          {error && <p style={{ color: 'red' }}> {error} </p>}
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
            placeholder="Please provide password"
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

export default withRouter(Signup); // HOC -> withRouter(Signup)
