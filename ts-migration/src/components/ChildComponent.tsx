//child should have login button
"use client"
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const ChildComponent=()=>{
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
 const [shouldRedirect, setShouldRedirect] = useState(false);

const { loggedIn, login } = useAuth();
const handleLoginClick = () => {
  login(username, password); // pass as strings
   setShouldRedirect(true);
};
 useEffect(() => {
    if (loggedIn && shouldRedirect) {
      
      redirect("/Assignment-3");
    }
  }, [loggedIn, shouldRedirect]);
return(
    <>
    <div style={{ justifyContent:"center",alignContent:"center", boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
         transition: "0.3s",padding: "2px 16px", maxWidth: "300px", margin:"auto"}}>
     <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
   
    <label> UserName:
    <input
       type="text"
       value={username}
       onChange={(e)=>setUsername(e.target.value)}
       placeholder="Enter UserName"
     /></label>
     </div>
     <div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
        <label>Password:
     <input
       type="password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       placeholder="password"
     /></label>
     </div>
     <div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
     <button onClick={handleLoginClick}>Log In </button>
     <button onClick={()=>{setUsername(""); setPassword("")}}>Reset</button>
     </div>
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
     {loggedIn?`Welcome back !! ${username} `:"Please Login "}
     </div>
     </div>
    </>
)
}
export default ChildComponent;