"use client"
import { useState } from "react"

const Notification = () =>{
    const[notification, setNotification] = useState<string>("");
    const showNotification = () =>{
        setNotification("This is a notification for 5 seconds");
        setTimeout(()=>{
            setNotification("");
        },5000)
    }
    return(
        <div>
            {notification}
            <button onClick={showNotification}>Click</button>
        </div>
    )
}
export default Notification