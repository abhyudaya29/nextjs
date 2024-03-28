import Image from "next/image";
// import styles from 
import Exampleclient from "@/components/client";
// import ExampleServer from "@/components/server";
import CounterInc from "@/components/counter";
export default function Home() {
  console.log("where i rendered");
  // console.log("I rendered on server side");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Abhyudaya</h1>
      {/* <p>click me</p> */}
      {/* <button onClickCapture={}>Click </button> */}
      <Exampleclient/>
      <CounterInc/>

      {/* <ExampleServer/> */}

    

      
      


    </main>
  );
}
