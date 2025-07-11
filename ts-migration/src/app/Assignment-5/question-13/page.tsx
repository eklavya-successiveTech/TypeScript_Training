"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import ReusableModal from "@/components/ReusableModal";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <ReusableModal open={open} onClose={() => setOpen(false)}>
        <h2>this is my Dumb Modal </h2>
      </ReusableModal>
    </div>
  );
}
