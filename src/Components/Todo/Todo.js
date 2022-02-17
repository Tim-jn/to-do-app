import './todo.css'
import checkIcon from './icon-check.svg'
import crossIcon from './icon-cross.svg'

export default function Todo({ todo, handleToggle, deleteTask }) {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  const handleDelete = (e) => {
    deleteTask(e.currentTarget.id)
  }

  return (
    <li className="todoItem">
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
      <button id={todo.id} onClick={handleDelete} className="crossIcon">
        <img src={crossIcon} alt="Cross icon" />
      </button>
    </li>
  )
}
