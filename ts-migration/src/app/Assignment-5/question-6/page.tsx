// No `"use client"` at the top!

import { AxiosRetryButton } from "@/components";
import fetchUsersAxios from "../actionAxios";
import { AxiosUser } from "@/types"; // if using types

const FetchData = async () => {
  let users: AxiosUser[] = [];
  let errorMsg = "";

  try {
    users = await fetchUsersAxios();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    errorMsg = "Failed to fetch users. Please try again.";
  }

  const hasUsers = users.length > 0;

  return (
    <div>
      <h2>User List</h2>

      {hasUsers ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>{errorMsg || "No users found."}</p>
      )}

      {!hasUsers && <AxiosRetryButton initialData={users} />}
    </div>
  );
};

export default FetchData;
