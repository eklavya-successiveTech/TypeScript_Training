"use client"
import { useState } from "react";

const CounterStep = () =>{
    const[count, setCount] = useState<number>(0);
    const[step, setStep] = useState<number>(1);

    const increment = () =>{
        setCount(count + Number(step));
    }
    const decrement = () =>{
        setCount(count - Number(step));
    }
    return(
        <div>
            <p>{count}</p>
            <input type="number" value={step} onChange={(e)=> setStep(Number(e.target.value))}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default CounterStep;