/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import fetchUsersAxios from "@/app/Assignment-5/actionAxios";
import { AxiosRetryButtonProps, AxiosUser } from "@/types";

const AxiosRetryButton = ({ initialData = [] }: AxiosRetryButtonProps) => {
  const [data, setData] = useState<AxiosUser[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

 const fetchData = async () => {
  try {
    setLoading(true);
    setError(null);
    const response = await fetchUsersAxios();
    setData(response.data);
  } catch (err: any) {
    console.error("Fetch error:", err); 
    setError("Failed to fetch users"); 
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    if (initialData.length === 0) fetchData();
  }, [initialData]);

  return (
    <div>
      <h3>User List</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No users available.</p>
      )}
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Retry"}
      </button>
    </div>
  );
};
export default AxiosRetryButton;
