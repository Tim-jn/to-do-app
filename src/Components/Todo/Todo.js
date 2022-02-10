import './todo.css'
import iconCheck from './icon-check.svg'

export default function Todo() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className="todoContent">
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
  )
}
