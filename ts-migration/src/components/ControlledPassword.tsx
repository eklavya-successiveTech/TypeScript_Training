"use client";
import { useState } from "react";

const ControlledPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setMessage("Passwords match! Registration successful.");
    } else {
      setMessage("Passwords do not match.");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px", width: "100%" }}>
          Register
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "10px",
            color: message === "Passwords do not match." ? "red" : "green",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ControlledPassword;
