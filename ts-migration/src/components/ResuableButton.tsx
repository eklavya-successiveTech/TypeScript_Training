"use client";

import React from "react";
import Button from "@mui/material/Button";
import { ReusableButtonProps, ButtonColor } from "@/types"; 

const ReusableButton = ({ children, colors = "primary", onClick }: ReusableButtonProps) => {
  const changeColors: Record<ButtonColor, "primary" | "secondary" | "error"> = {
    primary: "primary",
    secondary: "secondary",
    danger: "error",
  };

  return (
    <Button
      variant="contained"
      color={changeColors[colors] || "primary"}
      onClick={onClick}
      sx={{ marginRight: 1 }}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;

