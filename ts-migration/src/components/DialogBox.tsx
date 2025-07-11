"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Errors } from "@/types";


const DialogBox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert(`Name: ${name}, Email: ${email}`);
      handleClose();
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter your details</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogBox;
