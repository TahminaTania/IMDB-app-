"use client";

import { useEffect } from "react";

export default function Error({error,reset}) {
    useEffect(()=>{

    },[error])
   
  return (
    <div className="text-center my-20">
        <h1 className="text-5xl font-extrabold text-red-500 py-20">Something Went Wrong</h1>
        <button onClick={(e)=>reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Try Again</button>
    </div>
  )
}
