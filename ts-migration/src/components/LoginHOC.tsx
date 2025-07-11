"use client";


import { useAuth } from "@/context";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

const LoginHOC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, login } = useAuth();

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleLoginClick = () => {
    login(username, password);
    setPassword("");
    setShouldRedirect(true);
  };

  useEffect(() => {
    if (loggedIn && shouldRedirect) {
      
      redirect("/Assignment-5/question-14");
    }
  }, [loggedIn, shouldRedirect]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "2px 16px",
        maxWidth: "300px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          UserName:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter UserName"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleLoginClick}>Log In</button>
          <button onClick={() => { setUsername(""); setPassword(""); }}>Reset</button>
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {loggedIn ? `Welcome back !! ${username}` : "Please Login"}
        </div>
      </div>
    </div>
  );
};

export default LoginHOC;
