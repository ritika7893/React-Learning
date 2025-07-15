import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter == 20) {
      setCounter(counter)
    }
    else {
      setCounter(counter + 1)
    }
  }
  const decValue = () => {
    setCounter(counter - 1)
    if (counter == 0) {
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Counter Application</h1>
      <h2>In this project I learned about how hooks(usestate) works and value is updated in whole UI like this.In this I also added the functionality that counter should be in range (0,20){counter}</h2>
      <h3>Counter:{counter}</h3>
      <button onClick={addValue}>Add Value:{counter}</button>
      <button onClick={decValue}>Decrease Value:{counter}</button>

    </>
  )
}

export default App
