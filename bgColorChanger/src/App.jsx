import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive"); // or "black"

  return (
    <div className="w-full h-screen bg-red-500" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap gap-4 pt-10  pl-5 justify-center bgwhite">
        <button className="outline-none px-4 rounded" onClick={() => setColor("white")}>White</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("red")}>Red</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("green")}>Green</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("blue")}>Blue</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("purple")}>Purple</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("pink")}>Pink</button>
        <button className="outline-none px-4 rounded" onClick={() => setColor("black")}>Black</button>

      </div>
    </div>
  );
}

export default App;
