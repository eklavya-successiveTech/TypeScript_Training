"use client";

import { useState } from "react";
import { fetchUsers } from "../action";
import { User } from "@/types";

interface Props {
  initialData: User[];
}

const FetchLoadingComponent = ({ initialData }: Props) => {
  const [data, setData] = useState<User[]>(initialData);
  const [loading, setLoading] = useState(false);

  const retryButton = async () => {
    setLoading(true);
    try {
      const newData = await fetchUsers();
      setData(newData);
    } catch (err) {
      console.error("Retry failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!data?.length && (
        <button onClick={retryButton} disabled={loading}>
          {loading ? "Retrying..." : "Retry"}
        </button>
      )}

      {data?.length > 0 && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchLoadingComponent;


