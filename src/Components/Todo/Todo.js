import './todo.css'
import checkIcon from './icon-check.svg'

export default function Todo({ todo, handleToggle }) {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <div className="todoItem">
      <button
        id={todo.id}
        onClick={handleClick}
        className={todo.complete ? 'todoTaskBtn taskCompleted' : 'todoTaskBtn'}
        type="button"
        aria-label="task button"
      >
        {todo.complete ? <img src={checkIcon} alt="Check Icon" /> : ''}
      </button>
      <div className={todo.complete ? 'todoTask strike' : 'todoTask'}>
        {todo.task}
      </div>
    </div>
  )
}
