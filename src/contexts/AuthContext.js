import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebaseApp, { firebaseDB } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';


export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            getAuth(firebaseApp),
            (user) => {
                setCurrentUser(user);
                console.log(":: FIREBASE USER ::", user);
            }
        )
        return unsubscribe;
    }, []);

    const addUser = async (user) => {
        try {
            const usersCollection = collection(firebaseDB, "userDetails");
            await addDoc(usersCollection, {
                uid: user?.uid,
                email: user?.email
            })
        } catch (error) {
            console.log(":: addNewRoom ERROR ::", error);
        }
    }

    return <AuthContext.Provider value={{ user: currentUser, addUser }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
