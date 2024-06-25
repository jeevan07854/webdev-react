import React, { useState } from "react"
import { useToggle } from "../hook"
import { useInputValue } from "../hook"
const Coustomhook = () => {
  const [isTrue, toggledark] = useToggle(true)
  const nameInput = useInputValue("")
  return (
    <>
      <div
        style={{
          backgroundColor: isTrue ? "black" : "white",
          color: isTrue ? "white" : "black",
        }}
      >
        <h1>Hello My name is jeevan poudel and i am from nepal</h1>
        <button>helloo</button>
        <input {...nameInput} />
        <br />
        <br />

        <button onClick={toggledark}>darkmode</button>
      </div>
    </>
  )
}

export default Coustomhook
