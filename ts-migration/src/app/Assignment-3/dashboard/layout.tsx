// app/Assignment-3/dashboard/layout.js
import { ChildrenProp } from "@/types";
import Link from "next/link";
const DashboardLayout=({ children }:ChildrenProp)=> {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/Assignment-3/dashboard">
          <button style={navBtn}>Main</button>
        </Link>
        <Link href="/Assignment-3/dashboard/profile">
          <button style={navBtn}>Profile</button>
        </Link>
        <Link href="/Assignment-3/dashboard/settings">
          <button style={navBtn}>Settings</button>
        </Link>
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
}
const navBtn = {
  marginRight: "10px",
  padding: "10px 16px",
  backgroundColor: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
export default DashboardLayout;