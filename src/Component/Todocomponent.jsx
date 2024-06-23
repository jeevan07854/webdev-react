import React from "react"

const Todocomponent = ({ Title, checked }) => {
  return (
    <>
      <div>
        <input type="checkbox" name="#" defaultChecked={checked} />
        <h4>{Title}</h4>
      </div>
    </>
  )
}

export default Todocomponent
