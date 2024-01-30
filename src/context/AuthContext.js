import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubsribe;
    }, [])

    const value = {
        currentUser,
        signup, 
        login,
        logout,
    }

    
  return (
    <AuthContext.Provider value={value}>
        { !loading && children }
    </AuthContext.Provider>
  )
}
