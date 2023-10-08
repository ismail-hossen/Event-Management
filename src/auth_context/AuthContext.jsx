import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase_config";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ThemeContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("logout");
      }
    });
    return () => unsubscribe();
  }, []);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return (
    <ThemeContext.Provider value={{ createUser, login, logout, user }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AuthContext;

AuthContext.propTypes = {
  children: PropTypes.node,
};