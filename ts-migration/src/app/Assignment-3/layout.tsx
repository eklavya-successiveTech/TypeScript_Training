// app/Assignment-3/layout.tsx

import { ChildrenProp } from "@/types";
import Link from "next/link";




export const metadata = {
  title: "Assignment-3",
  description: "Next.js Assignment-3 Layout",
};



const buttonStyle: React.CSSProperties = {
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "10px 16px",
  border: "none",
  borderRadius: "6px",
  fontWeight: 500,
  cursor: "pointer",
  marginRight: "10px",
  marginBottom: "10px",
};

const Assignment3Layout = ({ children }: ChildrenProp) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "#333" }}>
        Next.js Assignment-3
      </h2>

      <div style={{ marginBottom: "20px" }}>
        <Link href="/Assignment-3/question-1">
          <button style={buttonStyle}>Ques-1</button>
        </Link>
        <Link href="/Assignment-3/question-2">
          <button style={buttonStyle}>Ques-2</button>
        </Link>
        <Link href="/Assignment-3/question-3">
          <button style={buttonStyle}>Ques-3</button>
        </Link>
        <Link href="/Assignment-3/question-4">
          <button style={buttonStyle}>Ques-4</button>
        </Link>
        <Link href="/Assignment-3/dashboard">
          <button style={buttonStyle}>Ques-5</button>
        </Link>
        <Link href="/Assignment-3/question-6">
          <button style={buttonStyle}>Ques-6</button>
        </Link>
      </div>

      <hr style={{ marginBottom: "20px" }} />
      {children}
    </div>
  );
};

export default Assignment3Layout;
