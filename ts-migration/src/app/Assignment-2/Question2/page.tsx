"use client";
import { useState } from "react";

interface Person {
    firstName : string;
    lastName :  string;
    age : string;
}
const PersonForm = () => {
  const [user, setUser] = useState<Person>({
    firstName : "",
    lastName : "",
    age : ""
  });

  function handleChange (field : keyof Person, value : string){
    setUser( prev=>({
        ...prev,
        [field] : value
    }));
  }
  return (
    <form>
      <label>
        First name:
        <input type="text" value={user.firstName} onChange={(e)=> handleChange("firstName", e.target.value)}/>
      </label>
      <label>
        Last name:
        <input type="text" value={user.lastName} onChange={(e)=> handleChange("lastName", e.target.value)}/>
      </label>
      <label>
        Age:
        <input type="text" value={user.age} onChange={(e) => handleChange("age", e.target.value)}/>
      </label>
    </form>
  );
};
export default PersonForm;