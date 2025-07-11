"use client";
import { useAuth } from "@/context/AuthContext";
const Assignment3Page = () => {
  const { loggedIn } = useAuth();
  return (
    <div>
      <h2>This is Assignment 3</h2>
      {loggedIn && <p>You are logged in. Welcome to the main page!</p>}
    </div>
  );
};
export default Assignment3Page;
