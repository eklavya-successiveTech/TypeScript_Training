// //4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

"use client"
import React, { useState } from 'react'

const RandomGenerator = () => {

    const [num,setNum]=useState<number>(0);
    const onHandleClick=()=>{
        const clone= Math.floor((Math.random()*100)+1);
       setNum(clone);
    }
  return (
    <div>
        <p> Number :{num }</p>
        <input    type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
        <button onClick={onHandleClick}> Random </button>
      
    </div>
  )
}

export default RandomGenerator
