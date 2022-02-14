import './todoList.css'
import Todo from '../Todo/Todo'

export default function TodoList({ toDoList, handleToggle, handleFilter }) {
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
        <div>
          {toDoList.map((todo, index) => {
            return <Todo key={index} handleToggle={handleToggle} todo={todo} />
          })}
        </div>
        <div className="todoInfo">
          {toDoList.length}items left
          <button onClick={handleFilter} className="clearButton">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  )
}
