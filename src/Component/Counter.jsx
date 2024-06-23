import React, { useState } from 'react'

const Counter = () => {
    const [counter , setCounter] = useState(0)
    const handleClick =()=>{
   

       return( setCounter(counter+1)  ) 
       

    }
  return (   
    <>
    <h1 onClick={handleClick}>{counter}</h1>
    </>
  )
}

export default Counter