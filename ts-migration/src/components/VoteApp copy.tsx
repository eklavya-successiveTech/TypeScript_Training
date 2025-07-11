"use client";
import { Action, VoteState } from "@/types";
import { useReducer } from "react";



const initialState: VoteState = {
  Minecraft: 0,
  SuperMario: 0,
  PubG: 0,
};


const reducer = (state: VoteState, action: Action): VoteState => {
  switch (action.type) {
    case "Minecraft":
      return { ...state, Minecraft: state.Minecraft + 1 };
    case "SuperMario":
      return { ...state, SuperMario: state.SuperMario + 1 };
    case "PubG":
      return { ...state, PubG: state.PubG + 1 };
    default:
      return state;
  }
};


const VoteApp = () => {
  const [votes, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        Vote for your favorite game
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "Minecraft" })}>
          Minecraft
        </button>
        <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "SuperMario" })}>
          SuperMario
        </button>
        <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "PubG" })}>
          PubG
        </button>
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          padding: "2px 16px",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          Results of Voting
        </h3>
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          Minecraft: {votes.Minecraft}
        </p>
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          SuperMario: {votes.SuperMario}
        </p>
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          PubG: {votes.PubG}
        </p>
      </div>
    </>
  );
};

export default VoteApp;
