import React, { useEffect, useState } from 'react'

const State = () => {
  const [name , setName]=useState("");
  const [age,setAge]=useState(0);
 

  const handleAdd=()=>{
    setAge(age+1)
  };
  const handleSub=()=>{
    setAge(age-1)
  }


  useEffect(()=>{
    const timeOut =setTimeout(() => {
      console.log(`My name is ${name} and i am ${age} years old   `)
    }, 2000)

    return ()=>
      clearTimeout(timeOut)
    
  },[name ,age])

  // useEffect(()=>{
  //   console.log({age})
  // },[age])



  return (
    <>
      <input type="text"  onChange={e=>setName(e.target.value)} />
      <br />
      <br />
      <button onClick={handleAdd}>+</button>
      {age}
      <button onClick={handleSub}>-</button>

      <h1>My Name is {name} and i am {age} Years old</h1>
       {/* {name} */}
    </>
  )
}

export default State