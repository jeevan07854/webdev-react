import React, { useState } from "react"

const Coustomhook = () => {
  const [isTrue, setIsTrue] = useState(true)
  const [name, setName] = useState("")
  return (
    <>
      <div
        style={{
          backgroundColor: isTrue ? "black" : "white",
          color: isTrue ? "white" : "black",
        }}
      >
        <h1>Hello My name is {name} and i am from nepal</h1>
        <input type="text" onClick={(e) => setName(e.target.value)} />
        <br />
        <br />

        <button onClick={() => setIsTrue((d) => !d)}>darkmode</button>
      </div>
    </>
  )
}

export default Coustomhook
