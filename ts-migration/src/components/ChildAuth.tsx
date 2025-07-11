"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const ChildAuth = () => {
  const { loggedIn, login } = useAuth();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClickHandler = () => {
    login(name, password); 
    setPassword("");
  };
  return (
    <>
      <p>{loggedIn ? `User logged in: ${name}` : "Please login"}</p>

      {!loggedIn && (
        <>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
              padding: "2px 16px",
              maxWidth: "300px",
              margin: "auto",
            }}
          >
            <label>Username</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Password</label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={{ marginTop: "10px" }}>
              <button onClick={onClickHandler}>Login</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChildAuth;
