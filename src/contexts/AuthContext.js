import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebaseApp from '../services/firebase';


export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            getAuth(firebaseApp),
            (user) => {
                setCurrentUser(user);
            }
        )
        return unsubscribe;
    }, [])

    return <AuthContext.Provider value={{ user: currentUser }}>
        {children}
    </AuthContext.Provider>
}
