import { User } from "@/types";


const FetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users: User[] = await response.json();

    return (
      <>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    return <p>Error fetching data: {(error as Error).message}</p>;
  }
};

export default FetchData;
