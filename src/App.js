import './App.css'
import useLocalStorage from 'use-local-storage'
import darkBannerDesktop from './assets/bg-desktop-dark.jpg'
import lightBannerDesktop from './assets/bg-desktop-light.jpg'
import moonIcon from './assets/icon-moon.svg'
import sunIcon from './assets/icon-sun.svg'
import TodoList from './Components/TodoList/TodoList'
import data from './data/data.json'
import { useState } from 'react'

function App() {
  // Set todo list

  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === parseInt(id)
        ? { ...task, complete: !task.complete }
        : { ...task }
    })
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  // Set mode (dark or light)

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <img
        src={theme === 'dark' ? darkBannerDesktop : lightBannerDesktop}
        alt="Banner"
        className="banner"
      />
      <section>
        <div className="headerContent">
          <h1 className="title">TODO</h1>
          <button onClick={switchTheme}>
            <img
              src={theme === 'light' ? moonIcon : sunIcon}
              alt="Theme Icon"
              className="switchIcon"
            />
          </button>
        </div>
        <TodoList
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          toDoList={toDoList}
        />
      </section>
    </div>
  )
}

export default App
