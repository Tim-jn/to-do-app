import './todoList.css'
import Todo from '../Todo/Todo'
import { useState } from 'react'

export default function TodoList({
  toDoList,
  handleToggle,
  handleFilter,
  addTask,
  // showActive,
}) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="todoForm">
        <input className="submitTodo" type="submit" value=" " />
        <input
          onChange={handleChange}
          type="text"
          value={userInput}
          className="createTodo"
          placeholder="Create a new todo..."
          required
        />
      </form>
      <div className="todoList">
        <div>
          {toDoList.map((todo, index) => {
            return <Todo key={index} handleToggle={handleToggle} todo={todo} />
          })}
        </div>
        <div className="todoInfo">
          {toDoList.length} items left
          <div className="middleButtons">
            <button className="allButton">All</button>
            <button className="activeButton">Active</button>
            <button className="completedButton">Completed</button>
          </div>
          <button onClick={handleFilter} className="clearButton">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  )
}
