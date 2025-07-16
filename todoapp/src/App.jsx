import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const addTask = () => {
    if (input.trim() != '') {
      setTasks([...tasks, input])
      setInput('')
    }
  }
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Todo Applicaton</h1>
      <input type="text" name="task" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <h2>ToDo Task</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginLeft: '8px',
                marginRight: '12px',
              }}
            >
              {task}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
