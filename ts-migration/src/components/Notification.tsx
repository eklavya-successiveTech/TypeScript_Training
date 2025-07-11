"use client"
import React, { useEffect, useState } from 'react'

const Notification = () => {
    const [message,setMessage]=useState<string>("");

 const handleClick=()=>{
    setMessage("this is the notification");
 }
    useEffect(()=>{
        if(message!=""){
            const id= setTimeout(()=>{
                setMessage(""); // 5 sec message invisible

            },5000)
        
        
return ()=>clearTimeout(id);
        }
    },[message]);


  return (
    <div>
        <button onClick={handleClick}> click me for message</button>
        {message && <p> {message}</p>}
    </div>
  )
}

export default Notification;
