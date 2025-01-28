import { useState } from 'react'

import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false);
const handleStart=()=>{
  setIsStart(true);
}
const handleReset=()=>{
  setIsStart(false);
}
  return (
    <>
      <h1>Countdown Timer</h1>
      
      {!isStart?<div className="input-container">
      <div className="input-box">
      <input id='hours' placeholder='HH' />
      <input id='minutes' placeholder='MM' />
      <input id='seconds' placeholder='SS' />
      <button onClick={handleStart} className='start-button' type="button">Start</button>
      </div>
      </div>:<div className="show-container">
      <div className="timer-box">
        <div>10</div>
        <span>:</span>
        <div>11</div>
        <span>:</span>
        <div>12</div>
        
      </div>
      <div className="action-box">
        <button className='start-button' type="button">Pause</button>
        <button className='start-button' type="button" onClick={handleReset}>Reset</button>
      </div>
      </div>}
      
    </>
  )
}

export default App
