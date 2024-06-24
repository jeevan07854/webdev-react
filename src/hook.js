import { useState } from "react"

export function useToggle(inval) {
  const [value, setValue] = useState(inval)
  function toggle() {
    setValue((val) => !val)
  }
  return [value, toggle]
}

export function useInputValue(initialValue) {
  const [input, setInputVal] = useState(initialValue)
  return {
    input,
    onChange: (e) => setInputVal(e.target.value),
  }
}
