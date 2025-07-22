'use client'
import { useState } from "react";

const Counter = () =>{
    const[counter, setCount] = useState<number>(0);

    const increment = () =>{
        setCount(counter+1);
    }
    const decrement = () =>{
        setCount(counter-1);
    }

    return(
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;