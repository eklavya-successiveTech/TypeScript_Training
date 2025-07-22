// app/Assignment-5/FetchWithButton.tsx
import FetchClient from "@/components/FetchClient";
import { User } from "@/types";

const FetchWithButton = async () => {
  let response: User[] = [];
  let error: string | null = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    response = await res.json();
  } catch (err) {
    console.error("Some Error", err);
    error = "Failed to fetch data.";
  }

  return <FetchClient initialData={response} initialError={error} />;
};

export default FetchWithButton;
