
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [x,setX] = useState(50);
  let[a,setA] = useState(0)
  let[b,setB] = useState(50);
  
 
  
  return (
  <>
  <div id="max-sum-holder">
    <label for="input">Input Max Sum :-</label>
    <input type='number' value={x} onChange={(e)=>setX(e.target.value)}></input>
  </div>
  <div id="range-a-holder">
    <input type='range' value={a} max= {x-b} onChange={(e)=>setA(e.target.value)}></input>
    <div id="range-a-value">{a}</div>
  </div><br />
  <div id="range-b-holder">
    <input type='range' value={b} max= {x-a} onChange={(e)=>setB(e.target.value)}></input>
    <div id="range-a-value">{b}</div>
  </div>
  <div id="sum">
  {[a,b].map(Number).reduce((sum,cur)=>sum+cur,0)}    
  </div>
  
  </>

  
  )
}


export default App;
