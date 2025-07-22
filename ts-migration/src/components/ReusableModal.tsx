"use client";

import React, { ReactNode } from "react";
import { Modal, Box, Button } from "@mui/material";

// Modal styles
const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  backgroundColor: "white",
  padding: 20,
  borderRadius: 4,
  boxShadow: 24,
};

// Define props type
interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function ReusableModal({ open, onClose, children }: ReusableModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {children}
        <Button
          variant="contained"
          onClick={onClose}
          style={{ marginTop: 20 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default ReusableModal;
