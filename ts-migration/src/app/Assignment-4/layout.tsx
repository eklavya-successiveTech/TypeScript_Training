
import { ChildrenProp } from "@/types";
import Link from "next/link";

export const metadata = {
  title: "Assignment-4",
  description: "Next.js Assignment-4 Layout",
};
const Assignment4Layout = ({ children }:ChildrenProp) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
      }} >
      <h2 style={{ marginBottom: "16px", color: "#333" }}>
        Next.js Assignment-4
      </h2>
      <div
        className="parent-button"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }} >
        <div>
          {(() => {
            const links = [];
            for (let i = 1; i <= 14; i++) {
              links.push(
                <Link key={i} href={`/Assignment-4/question-${i}`}>
                  <button>Ques-{i}</button>
                </Link>
              );
            }
            return links;
          })()}
        </div>
      </div>
      <hr style={{ marginBottom: "20px" }} />
      {children}
    </div>
  );
};
export default Assignment4Layout;
