// app/Assignment-5/FetchData.tsx
import { fetchUsers } from "../action";
import { User } from "@/types";
import FetchLoadingComponent from "./FetchLoadingComponent";

export default async function FetchData() {
  let users: User[] = [];
  let error: string | null = null;

  try {
    users = await fetchUsers();
  } catch (err) {
    error = "Failed to load users, please try again.";
    console.error("SSR error:", err);
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
        <>
          <p style={{ color: "red" }}>{error}</p>
          <FetchLoadingComponent initialData={[]} />
        </>
      )}
    </div>
  );
}
