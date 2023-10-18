import React, { useCallback, useState } from 'react'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import firebaseApp from '../../services/firebase';

function Login() {
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("TEST");

    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        if (email && password) {

            await signInWithEmailAndPassword(
                getAuth(firebaseApp),
                email,
                password
            )


        }
    }, [email, password])

    return (
        <div className='min-h-screen flex items-center justify-center bg-red-100'>
            <form onSubmit={handleLogin} className='w-96 space-y-4'>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className='w-full p-2 border rounded'
                    placeholder='Please provide email'
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className='w-full p-2 border rounded'
                    placeholder='Please enter password'
                />
                <button className='w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Login</button>
            </form>

        </div>
    )
}

export default Login