// here render the function which we craeted in Action,jsx 
// import { FetchClient } from "@/components";
// app/Assignment-5/FetchData.tsx
import { fetchUsers } from "../action";
import { User } from "@/types"; // Adjust path as needed

export default async function FetchData() {
  const users: User[] = await fetchUsers();

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
            {/* <FetchClient data={users} errors={error}/> */}
    </>
  );
}
