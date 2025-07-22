"use client";

import { ReusableButton } from "@/components";
import React from "react";
export default function HomePage() {
  const handlePrimaryClick = () => alert("Primary clicked!");
  const handleSecondaryClick = () => alert("Secondary clicked!");
  const handleDangerClick = () => alert("Danger clicked!");
  return (
    <div style={{ padding: 20 }}>
      <h1>Dumb Buttons</h1>

      <ReusableButton colors="primary" onClick={handlePrimaryClick}>
        Primary Button
      </ReusableButton>

      <ReusableButton colors="secondary" onClick={handleSecondaryClick}>
        Secondary Button
      </ReusableButton>

      <ReusableButton colors="danger" onClick={handleDangerClick}>
        Danger Button
      </ReusableButton>
    </div>
  );
}
