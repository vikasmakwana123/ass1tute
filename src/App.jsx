import React from 'react'
import './App.css'
import ClassComponent from './classComponent'
import FuncComponent from './funcComponent'

function App() {
  return (
    <>
    <div style={{display:'flex',  gap:'20px'}}>
      <ClassComponent/>
      <FuncComponent/>
      </div>
    </>
  )
}

export default App
