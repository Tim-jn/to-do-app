import './todo.css'
import checkIcon from './icon-check.svg'
import { Draggable } from 'react-beautiful-dnd'

export default function Todo({ todo, handleToggle, index }) {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <li
          className="todoItem"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <button
            id={todo.id}
            onClick={handleClick}
            className={
              todo.complete ? 'todoTaskBtn taskCompleted' : 'todoTaskBtn'
            }
            type="button"
            aria-label="task button"
          >
            {todo.complete ? <img src={checkIcon} alt="Check Icon" /> : ''}
          </button>
          <div className={todo.complete ? 'todoTask strike' : 'todoTask'}>
            {todo.task}
          </div>
        </li>
      )}
    </Draggable>
  )
}
