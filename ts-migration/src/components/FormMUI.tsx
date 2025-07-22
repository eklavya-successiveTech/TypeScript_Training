"use client";

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ name: "", email: "" });

  const validate = () => {
    let valid = true;
    const newError = { name: "", email: "" };

    // Name: only alphabets
    if (!/^[A-Za-z\s]+$/.test(name)) {
      newError.name = "Name must contain only letters";
      valid = false;
    }

    // Email: must match standard email pattern
    if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      newError.email = "Enter a valid email";
      valid = false;
    }

    setError(newError);
    return valid;
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
      setName("");
      setEmail("");
      setError({ name: "", email: "" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 300,
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!error.name}
        helperText={error.name}
      />

      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error.email}
        helperText={error.email}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default SimpleForm;
