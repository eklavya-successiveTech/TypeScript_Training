
"use client"
import { CounterWithSteps } from '@/types';
import React, { useState } from 'react'

const CounterWithStep = ({initialCount=0,step=1}:CounterWithSteps) => {
     const [message,setMessage]=useState<number>(step);
     const[count,setCount]=useState<number>(initialCount);
     const increment=()=>{
        setCount(count+message);
     } 
     const decrement=()=>{
        setCount(count-message);
     }
  return (
    <div>
        <label> Enter your Count:
        <input value={message} onChange={(e)=>setMessage(Number(e.target.value))}/>
        </label>
        <p> Count :{count}</p>
        <button onClick={increment}>
            Increment
        </button>
        <button  onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default CounterWithStep;

