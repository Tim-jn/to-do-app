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
  const [activeLink, setActiveLink] = useState(1)

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
        <div className="todoListContent">
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
          <div className="itemsLeft">
            <span>{toDoList.length} items left</span>
          </div>
          <div className="middleButtons">
            <button
              onClick={() => {
                showAll()
                setActiveLink(1)
              }}
              className={
                activeLink === 1 ? 'allButton activeLink' : 'allButton'
              }
            >
              All
            </button>
            <button
              onClick={() => {
                showActive()
                setActiveLink(2)
              }}
              className={
                activeLink === 2 ? 'activeButton activeLink' : 'activeButton'
              }
            >
              Active
            </button>
            <button
              onClick={() => {
                showCompleted()
                setActiveLink(3)
              }}
              className={
                activeLink === 3
                  ? 'completedButton activeLink'
                  : 'completedButton'
              }
            >
              Completed
            </button>
          </div>
          <button onClick={handleFilter} className="clearButton">
            <span> Clear Completed</span>
          </button>
        </div>
      </div>
    </>
  )
}
