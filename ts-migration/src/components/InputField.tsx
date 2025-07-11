// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly
"use client";
import { useState } from "react";

const InputField = () => {
  const [username, setName] = useState("");

  const onHandleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <>
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <label>UserName </label>
          <input type="text" value={username} onChange={onHandleClick} />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <p>UserName : {username}</p>
        </div>
      </div>
    </>
  );
};

export default InputField;
