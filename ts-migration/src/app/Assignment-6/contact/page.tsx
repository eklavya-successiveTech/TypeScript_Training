"use client";

import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <p> loading About Page</p>,
});
 const Home=()=> {
  return (
    <>
      < Contact/>
    </>
  );
}

export default Home