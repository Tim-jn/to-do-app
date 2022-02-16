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
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredList, setFilteredList] = useState(toDoList)

  const handleToggle = (id) => {
    if (isFiltered) {
      let mapped = filteredList.map((task) => {
        return task.id === parseInt(id)
          ? { ...task, complete: !task.complete }
          : { ...task }
      })
      setFilteredList(mapped)
      setToDoList(mapped)
    } else {
      let mapped = toDoList.map((task) => {
        return task.id === parseInt(id)
          ? { ...task, complete: !task.complete }
          : { ...task }
      })
      setToDoList(mapped)
    }
  }

  const handleFilter = () => {
    if (isFiltered) {
      let filtered = filteredList.filter((task) => {
        return !task.complete
      })
      setFilteredList(filtered)
      setToDoList(filtered)
    } else {
      let filtered = toDoList.filter((task) => {
        return !task.complete
      })
      setToDoList(filtered)
    }
  }

  const addTask = (userInput) => {
    if (isFiltered) {
      let copy = [...filteredList]
      copy = [...copy, { id: rand, task: userInput, complete: false }]
      setFilteredList(copy)
      setToDoList(copy)
    } else {
      let copy = [...toDoList]
      copy = [...copy, { id: rand, task: userInput, complete: false }]
      setToDoList(copy)
    }
  }

  const showAll = () => {
    setIsFiltered(false)
    setToDoList(toDoList)
  }

  const showActive = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete
    })
    setIsFiltered(true)
    setFilteredList(filtered)
  }

  const showCompleted = () => {
    let filtered = toDoList.filter((task) => {
      return task.complete
    })
    setIsFiltered(true)
    setFilteredList(filtered)
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

  // get a random id

  const rand = Math.floor(Math.random() * (100 - 6 + 1)) + 6

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
          addTask={addTask}
          showActive={showActive}
          showAll={showAll}
          showCompleted={showCompleted}
          toDoList={isFiltered ? filteredList : toDoList}
        />
      </section>
    </div>
  )
}

export default App
