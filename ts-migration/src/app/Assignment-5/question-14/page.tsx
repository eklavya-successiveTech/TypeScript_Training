"use client";

import withAuth from "@/hoc/withAuth";

const ProtectedPage = () => {
  return (
    <>
      <h1> This is my Protected Page </h1>
      <p> Come after Login</p>
    </>
  );
};

export default withAuth(ProtectedPage);

