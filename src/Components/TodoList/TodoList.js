import './todoList.css'
import Todo from '../Todo/Todo'

export default function TodoList({ toDoList, handleToggle }) {
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
          {toDoList.map((todo) => {
            return (
              <Todo key={todo.id} handleToggle={handleToggle} todo={todo} />
            )
          })}
        </div>
        <div className="todoInfo">items left</div>
      </div>
    </>
  )
}
