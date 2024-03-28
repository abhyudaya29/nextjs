"use client"
import { useState } from "react"

const CounterInc:React.FC=()=>{
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Click me</button>
        </>
    )
}
export default CounterInc