
import {ChildrenProp } from "@/types";
import Link from "next/link";

export const metadata = {
  title: "Assignment-2",
  description: "Next.js Assignment-2 Layout",
};

const Assignment2Layout = ({ children }:ChildrenProp) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "#333" }}>
        Next.js Assignment-2
      </h2>

      <div
        className="parent-button"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div>
          {(() => {
            const links = [];
            for (let i = 1; i <= 5; i++) {
              links.push(
                <Link key={i} href={`/Assignment-6/question-${i}`}>
                  <button>{`Ques-${i}`}</button>
                </Link>
              );
            }
            return links;
          })()} 
           {/* IIFe */}
        </div>
      </div>

      <hr style={{ marginBottom: "20px" }} />
      {children}
    </div>
  );
};

export default Assignment2Layout;
