import { useState } from 'react'
import Comp from './Comp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp name="Ritika" />
    </>
  )
}

export default App
