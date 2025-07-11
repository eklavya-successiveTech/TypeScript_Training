"use client";

import { useState } from "react";
import axios from "axios";
import { User } from "@/types";



const PostForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post<User>("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
      });

      if (response.status === 201) {
        setMessage("User created successfully!");
        setName("");
        setEmail("");
      }
    } catch (err) {
      console.error("Error creating user:", err);
      setError("Failed to create user. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }} >
          Submit 
        </button>
      </form>
      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default PostForm;
