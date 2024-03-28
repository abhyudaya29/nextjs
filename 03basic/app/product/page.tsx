/* eslint-disable react/jsx-key */
const dataFetch=async()=>{
    let data=await fetch("https://dummyjson.com/products");
    const response=await data.json();
    return response.products


}
const RederProduct=async ()=>{
    const list=await dataFetch()
    console.log(list)
    
    return(
       <>
       <h1>Product list:</h1>
       {
        list?.map((items:any)=>(<h1>
            name:{items.title},
            price:{items.price}
        </h1>))
       }

       </>
    )
}
export default RederProduct