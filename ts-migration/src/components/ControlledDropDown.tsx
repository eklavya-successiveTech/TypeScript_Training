"use client";

import { useState } from "react";

const ControlledDropDown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <label htmlFor="fruit">Choose a fruit:</label>
      <select
        id="fruit"
        value={selectedOption}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginTop: "8px" }}
      >
        <option value="">select</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="mango">Mango</option>
        <option value="orange">Orange</option>
      </select>

      {selectedOption && (
        <p style={{ marginTop: "10px" }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
};

export default ControlledDropDown;
