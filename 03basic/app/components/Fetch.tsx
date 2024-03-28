"use client"
import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const[product,setProduct]=useState([])
    const fetchData=async()=>{
        const data=await fetch('https://dummyjson.com/products');
        const response=await data.json();
        setProduct(response.products);
        console.log(response,">>pruduct");
    }
    useEffect(()=>{
        fetchData();
        // setProduct()
    },[])
  return (
    <>
    <div>
        <h1>hello</h1>
        <h2>Product list</h2>
        {
            // eslint-disable-next-line react/jsx-key
            product.map((items:any)=>(<h1>
                name:{items.title}
            </h1>))
            
        }
    </div>
    </>
  )
}

export default Fetch