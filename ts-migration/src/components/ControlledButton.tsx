"use client";
import { useState, ChangeEvent } from "react";

const ControlledButton = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleClick = () => {
    if (inputValue.trim().toLowerCase() === "show") {
      setShowMessage(true);
      setInputValue("");
    } else {
      setShowMessage(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <p>Please type show to reveal the hidden message</p>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter here Show"
        onChange={handleChange}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleClick} style={{ padding: "8px", width: "100%" }}>
        Submit
      </button>
      {showMessage && <p style={{ marginTop: "10px" }}>You typed show!</p>}
    </div>
  );
};

export default ControlledButton;
