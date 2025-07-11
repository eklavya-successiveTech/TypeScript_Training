import { ChildProps } from "@/types";
import React from "react";


const Child = ({ onReset, count, onIncrement }: ChildProps)=> {
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "2px 16px",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <h2>Child component</h2>
      <p>Count: {count}</p>
      <button
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
        onClick={onIncrement}
      >
        Increment
      </button>
      <button
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "10px",
        }}
        onClick={onReset}
      >
        Reset to Zero
      </button>
    </div>
  );
};

export default Child;
