"use client"
import { useEffect, useState } from "react"

const Clock = () =>{
    const[time, setTime] = useState<string>(new Date().toLocaleTimeString())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)

        return ()=> clearInterval(intervalId);
    },[])
    return(
        <div>
            {time}
        </div>
    )
}
export default Clock;