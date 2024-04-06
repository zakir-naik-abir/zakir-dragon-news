import { createContext, useEffect, useState } from "react"
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) =>{

  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  
  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  }
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  }
  
  const [user, setUser] = useState(null);
  useEffect( () =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('User in the auth state changed', currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return unSubscribe;
  },[])

  const logOut = () =>{
    return signOut(auth)
  }

  const authInfo = {user, createUser, loginUser, googleLogin, githubLogin, facebookLogin, logOut, success, setSuccess, error, setError, loading}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;