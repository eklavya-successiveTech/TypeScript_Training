"use client";

import dynamic from "next/dynamic";
const AboutContent = dynamic(() => import("@/components/AboutContent"), {
  loading: () => <p> loading About Page</p>,
});
 const Home=()=> {
  return (
    <>
      <AboutContent />
    </>
  );
}

export default Home