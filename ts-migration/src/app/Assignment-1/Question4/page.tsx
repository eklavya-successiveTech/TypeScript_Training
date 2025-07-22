"use client"
import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);

    function increment(){
        setCount(prev => prev + 1);
    }
    function decrement(){
        setCount(prev => prev - 1);
    }

    return(
        <div>
            <p>Counter Component, with increment and decrement button</p>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

