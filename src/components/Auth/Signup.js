import React, { Component } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../services/firebase";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      await createUserWithEmailAndPassword(
        getAuth(firebaseApp),
        email,
        password
      );
    }
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="flex justify-center mt-16">
        <form onSubmit={this.handleSignup} className="w-96 flex flex-col gap-8">
          <h1 className="text-slate-900 text-3xl">Signup</h1>
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
