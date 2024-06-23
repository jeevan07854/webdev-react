import React, { useEffect, useState } from "react"
import User from "./User"
const Handlejson = () => {
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUser)
  })

  return (
    <>
      <h1>User Date</h1>
      <ul>
        {users.map((user) => {
          return <User key={user.id} {...user} />
        })}
      </ul>
    </>
  )
}

export default Handlejson
