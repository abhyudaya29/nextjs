"use client"
import { ChangeEventHandler } from "react"
// due to the use of "use Clent", it will render all the componnets and child component on browser 
import ExampleServer from "./server"
const Exampleclient = () => {
    console.log("I,. clent components")
    const clicked=()=>{
        alert("button clicked")
        console.log("Button clicked on client side")
    }
    const handlechange=(e:any )=>{
        console.log(e.target.value)
    }
  return (
    <>
    <button onClick={clicked}>Click me</button>
    <input type="text" 
    placeholder="pleae write something"
    onChange={handlechange}
    />
    </>
  )
}   

export default Exampleclient