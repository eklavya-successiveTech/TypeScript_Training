// app/Assignment-5/FetchClient.tsx
"use client";

import { fetchUsers } from "@/app/Assignment-5/action";
import { FetchClientProps, User } from "@/types";
import { useState } from "react";


const FetchClient = ({ initialData = [], initialError = null }: FetchClientProps) => {
  const [users, setUsers] = useState<User[]>(initialData);
  const [error, setError] = useState<string | null>(initialError);
  const [isLoading, setLoading] = useState(false);

  const retryFetch = async () => {
    try {
      setLoading(true);
      const user = await fetchUsers();
      setUsers(user);
      setError(null);
    } catch {
      setError("Retry failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={retryFetch} disabled={isLoading}>
        {isLoading ? "Retrying..." : "Retry"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchClient;
