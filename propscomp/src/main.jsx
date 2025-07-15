import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import React from 'react'
function fun() {
  return (
    <h1>Ready to built</h1>
  )
}
/*const reactElement = (
  <a href="https://google.com/" target="_blank" rel="noreferrer">
    Click to Visit Google
  </a>
);*/
const a = "Heelo";
const reactElement = React.createElement(
  "p",
  { align: "center" },
  "My name is Ritika — ",
  a
);
createRoot(document.getElementById('root')).render(

  reactElement
)
