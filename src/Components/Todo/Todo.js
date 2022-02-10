import './todo.css'
import iconCheck from './icon-check.svg'
import { useState } from 'react'

export default function Todo() {
  const [todos, setTodos] = useState(['Faire des courses'])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form className="todoForm">
        <input
          className="submitTodo"
          type="submit"
          value=" "
          onClick={handleSubmit}
        />
        <input
          type="text"
          className="createTodo"
          name="createTodo"
          placeholder="Create a new todo..."
        />
      </form>
      <div className="todoList">
        {todos.map((todo) => {
          return (
            <div className="todoItem" key={todo}>
              {todo}
            </div>
          )
        })}
        <div className="todoInfo">items left</div>
      </div>
    </>
  )
}
