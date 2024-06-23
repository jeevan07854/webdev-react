import React from "react"

const User = ({ name, email, phone }) => {
  return (
    <>
      <li>
        {name} <br /> {email} <br />
        {phone}
      </li>
    </>
  )
}

export default User
