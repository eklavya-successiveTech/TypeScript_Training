"use client";
import { useState } from "react";

const CelsiusFahrenheit = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setCelsius(value);

    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed) && value !== "") {
      setFahrenheit(((parsed * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setFahrenheit(value);

    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed) && value !== "") {
      setCelsius((((parsed - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Temperature Converter</h2>

      <div style={{ marginBottom: "16px" }}>
        <label>Celsius: </label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
          style={{ padding: "8px", width: "150px" }}
          inputMode="decimal"
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
          style={{ padding: "8px", width: "150px" }}
          inputMode="decimal"
        />
      </div>
    </div>
  );
};

export default CelsiusFahrenheit;
