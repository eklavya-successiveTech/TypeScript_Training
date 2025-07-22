"use client";

import dynamic from "next/dynamic";

// Dynamically import Sidebar with ssr: false
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

export default function SidebarWrapper() {
  return <Sidebar />;
}
