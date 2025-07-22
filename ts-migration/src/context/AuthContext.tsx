"use client";

import { createContext, useContext, useState } from "react";
import { AuthContextType , ChildrenProp } from "@/types"; 


const MyAuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: ChildrenProp) => {
  const validUsername = "Nayan";
  const validPassword = "2486";

  const [loggedIn, setLoggedin] = useState(false);

  const login = (name: string, pass: string) => {
    console.log("Attempting login with", name, pass);
    if (name === validUsername && pass === validPassword) {
      console.log("Login successful");
      setLoggedin(true);
    } else {
      console.log("Invalid credentials");
      setLoggedin(false);
    }
  };

  return (
    <MyAuthContext.Provider value={{ loggedIn, login }}>
      {children}
    </MyAuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(MyAuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
