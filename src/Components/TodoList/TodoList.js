import './todoList.css'
import Todo from '../Todo/Todo'
import { useState } from 'react'

export default function TodoList({
  toDoList,
  filteredList,
  handleToggle,
  handleFilter,
  addTask,
  showActive,
  showAll,
  showCompleted,
  isFiltered,
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
      {!isFiltered && (
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
      )}
      <div className="todoList">
        <div>
          {toDoList
            ? toDoList.map((todo, index) => {
                return (
                  <Todo key={index} handleToggle={handleToggle} todo={todo} />
                )
              })
            : filteredList.map((todo, index) => {
                return (
                  <Todo key={index} handleToggle={handleToggle} todo={todo} />
                )
              })}
        </div>
        <div className="todoInfo">
          {toDoList.length} items left
          <div className="middleButtons">
            <button onClick={showAll} className="allButton">
              All
            </button>
            <button onClick={showActive} className="activeButton">
              Active
            </button>
            <button onClick={showCompleted} className="completedButton">
              Completed
            </button>
          </div>
          <button onClick={handleFilter} className="clearButton">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  )
}
