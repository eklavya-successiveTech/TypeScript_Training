"use client"
import { useCallback, useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount((prev)=> prev+1);

    }
    const reset= useCallback(()=>{
        setCount(0);
    },[])
    return (
        <div style={{ justifyContent:"center",alignContent:"center", boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
         transition: "0.3s",padding: "2px 16px", maxWidth: "300px", margin:"auto"}} >
        <h1> Parent component</h1>
        {/* <p> Count :{count}</p> */} 

        <Child onReset={reset} count={count} onIncrement={increment}></Child>
        </div>
    )

}
export default Parent;