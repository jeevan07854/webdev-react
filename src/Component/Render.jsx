// This component is used for rendering the useEffect hook

import React, { useEffect, useState } from 'react'

const Render = () => {
  const [name,setName] =useState("")
 const [click,setClick]=useState("")

 useEffect(
  ()=>{
    console.log("Hi")
  },[click]
 )
 
  // useEffect(()=>{
  //   console.log("Re-render")
  // })
  return (
    <>
     <div>
      <button onClick={()=>{
        setClick("Hi")
      }}>click</button>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      <h1>Hi</h1>
      <h2>My name is {name}</h2>
     </div>

    </>
  )
}

export default Render