"use client";

import AboutPage from "@/app/about/page";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
const Home = () => {
  const { loggedIn } = useAuth();
  return (
    <>
      {loggedIn ? (
        <>
          <div>
            <AboutPage />
          </div>
        </>
      ) : (
        redirect('/Assignment-3/question-2')
      )}
    </>
  );
};
export default Home;