import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

export const UserContext = createContext<firebase.User | null>(null);

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      {!loading && children}
    </UserContext.Provider>
  );
};
