"use client"
import { useState } from "react";

const Rng = () =>{
    const [number, setNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
    
    const numberGenerator = ()=>{
        let randomNumber = Math.floor(Math.random()*100)+1;
        setNumber(randomNumber);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={numberGenerator}>RNG</button>
        </div>
    )
}
export default Rng;