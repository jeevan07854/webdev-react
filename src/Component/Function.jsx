import React from 'react'
import { useState } from 'react'



const INITIAL_VALUE =([ "A","B","C"])
const Function = () => {
  const[arr,setArr] =useState(INITIAL_VALUE)
  const [value ,setValue] =useState("");
  const removeFirstarray =()=>{
    setArr(
      remove=>{
        return (remove.slice(1))
      }
    )
  }
  const handleFilter=(letter)=>{
  setArr(remove=>{
    return remove.filter( arr => arr!==letter)
  })
  }

  const handleAddToFirst=(letter)=>{
    setArr(curarr=>{
      // curarr.push(letter)
      return (
        [letter ,...curarr]
      )
    })
  }
const handleAddTolast=(letter)=>{
    setArr(curarr=>{
      // curarr.push(letter)
      return (
        [...curarr , letter]
      )
    })
  }

  const clear=()=>{
    setArr([]);
  }

  const reset =()=>{
    setArr(
      INITIAL_VALUE
    )
  }
  const filterA=(letter)=>{
    setArr(
      filter=>{
        return (
        filter.map(element =>
          {
            if(element === "A") return "H"
            else return element;
          }
        ))
      }
    )
  }

  return (
    <>
     <button onClick={removeFirstarray}>
      Remove
     </button>
     <br />
     <br />
     <button onClick={ ()=>handleFilter("C")}>Filter</button>
     <br />
     <br />
     <button onClick={()=>handleAddToFirst ("A")}>Add to first</button>
     <br /><br />
     <button  onClick={()=>handleAddTolast("Z")}>Add to last</button>
     <br />
     <br />
     <button onClick={reset}>Reset</button>
     <br />
     <br />
     <button onClick={clear}>Clear</button>

     <br />
     <br />
     <button onClick={()=>filterA("A")}>Filter A</button>
     <br />
     <br />
     <input type="text" onChange={e=>{ setValue(e.target.value)}}/>
<br />
<br />
<button onClick={()=>handleAddToFirst(value)}>Add to Array</button>
     {arr.join(",")}

     <br />
     <br />
     {value}

    
    </>
  )
}

export default Function