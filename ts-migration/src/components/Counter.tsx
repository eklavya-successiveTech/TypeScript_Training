"use client" 
import React, { useState } from 'react'



const Counter = () => {
    const[count,setCount]=useState<number>(0);

    const handleClick=()=>{
        setCount(count+1);

    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <p> Count:{count}</p>
        <div style={{display:'flex'}}> 
        <button  onClick={handleClick} > Increment</button>
        <button onClick={decrement}> Decrement</button>
        </div>
    </div>
  )
}

export default Counter
