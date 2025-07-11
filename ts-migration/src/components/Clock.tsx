// 6.Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

"use client"

import { TimeNow } from '@/types';
import React, { useEffect, useState } from 'react'

const Clock = ({timeInterface}:TimeNow) => {
    const[time,setTime]=useState <string>(timeInterface);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());

        },1000);
        return ()=>clearInterval(interval);
    
    },[]);
  return (
    <div>
      <p> Time {time}</p>
    </div>
  )
}

export default Clock;
