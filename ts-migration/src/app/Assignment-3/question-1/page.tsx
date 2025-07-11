"use client";

import { ChildComponent } from "@/components";
import { AuthContextProvider, useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

// Inner component to use the context
const InnerContent = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    redirect("/Assignment-3");
  }

  return (
    <div>
      <p>
        UserName: <strong>Nayan</strong> <br />
        Password: <strong>2486</strong>
      </p>
      <ChildComponent />
    </div>
  );
};

// Wrap the context provider here
const Home = () => {
  return (
    <AuthContextProvider>
      <InnerContent />
    </AuthContextProvider>
  );
};

export default Home;
