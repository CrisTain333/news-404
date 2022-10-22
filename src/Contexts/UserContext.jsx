import React, { useEffect, useState } from "react";
import AuthContext from "./Context";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //
      })
      .catch((error) => {
        alert(error);
      });
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const loginUser = (email, password) => {
    setLoading(true)
   return  signInWithEmailAndPassword(auth, email, password)
     
  };

  const createUser =(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const  userDatas = userCredential.user
      setUserData(userDatas)
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
    
  }

  return (
    <AuthContext.Provider
      value={{
        googleLogin,
        userData,
        logOut,
        loading,
        loginUser,
        error,
        setError,
        createUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
