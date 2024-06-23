import React, { useEffect, useState } from "react"
const Todo = () => {
  const [title, setTitle] = useState([])
  const [todos, setTodos] = useState([])
  const handleSubmit = () => {
    if (title === "") return
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { name: title, checked: true, id: crypto.randomUUID() },
      ]
    })
    setTitle("")
  }

  const deleteHandler = (todoId) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== todoId)
    })
  }
  return (
    <>
      <div className="list">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="listItem">
              <input type="checkbox" defaultChecked={false} />
              <span>{todo.name}</span>
              <div>
                <button onClick={() => deleteHandler(todo.id)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <br />
      <br />

      {/* {JSON.stringify(todos)} */}
      <br />
      <br />

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input type="button" onClick={handleSubmit} value="submit" />
    </>
  )
}

export default Todo
