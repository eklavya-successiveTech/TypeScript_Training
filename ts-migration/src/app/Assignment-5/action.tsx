
export const fetchUsers = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // if (!res.ok) {
    //   throw new Error('Failed to fetch users');
    // }
    const data = await res.json();
    return data;
  } catch (error) {

    console.error('something is wrong here', error);
  }
};

