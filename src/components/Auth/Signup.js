import React, { Component } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../../services/firebase';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSignup = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            await createUserWithEmailAndPassword(
                getAuth(firebaseApp),
                email,
                password
            )
        }
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.handleSignup}>
                    <input
                        onChange={this.onEmailChange}
                        value={email}
                        type="email"
                        placeholder='Please provide email'
                    />
                    <input
                        onChange={e => this.setState({ password: e.target.value })}
                        value={password}
                        type="password"
                        placeholder='Please enter password'
                    />
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default Signup