import { User } from "@/types";
import fetchUsersAxios from "../actionAxios"; // ensure path is correct

const HomePage = async () => {
  const users: User[] = await fetchUsersAxios(); // typed response

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
