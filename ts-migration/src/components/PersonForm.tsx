"use client"
import React, { useState } from 'react'



// type Props={
//     firstName:string;
//     lastName:string;
//     age:number;
// }
const PersonForm = () => {

    const [firstName,setName]=useState<string>("");
    const[lastName,setLastName]=useState<string>("");
    const[age,setAge]=useState<number>(0);


  return (
    <>
        <label> First Name:
        <input  value={firstName} onChange={(e)=>(setName(e.target.value))}/>
        </label>
        <label> Last Name:
        <input  value={lastName} onChange={(e)=>(setLastName(e.target.value))}/>
        </label>
        <label> Age:
        <input  value={age} onChange={(e)=>(setAge(Number(e.target.value)))}/>
        </label>

    <h3> First Name : {firstName}</h3>
    <h3> Last Name :{lastName}</h3>
    <h3> Age: {age}</h3>
    </>
  )
}

export default PersonForm
