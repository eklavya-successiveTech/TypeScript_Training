"use client";
import { PaginationProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";


const Pagination = ({ currentPage, totalPages }:PaginationProps) => {
  const router = useRouter();

  const handleButton = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      router.push(`/Assignment-5/question-4/products/${pageNumber}`);
    }
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    margin: "0 8px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#999",
    cursor: "not-allowed",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
  };

  const pageInfoStyle: React.CSSProperties = {
    fontSize: "16px",
    minWidth: "100px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={() => handleButton(currentPage - 1)}
        disabled={currentPage <= 1}
        style={currentPage <= 1 ? disabledButtonStyle : buttonStyle}
      >
        Prev
      </button>

      <p style={pageInfoStyle}>
        {currentPage} of {totalPages}
      </p>

      <button
        onClick={() => handleButton(currentPage + 1)}
        disabled={currentPage >= totalPages}
        style={currentPage >= totalPages ? disabledButtonStyle : buttonStyle}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
