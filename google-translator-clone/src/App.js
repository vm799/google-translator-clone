import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
// const axios = require("axios").default

function App() {

  const [to, setTo]= useState("")
  const [from, setFrom]= useState("")
  const [input, setInput]= useState("")
  const [output, setOutput]= useState("")
  const [options, setOptions]= useState([])

useEffect(()=>{
  fetch("https://libretranslate.com/languages")
  .then (res=> res.json())
  .then (res=>{
    setOptions(res)
  })
})

  return (
    <div className="App">
      <header className="App-header">
        <h1> Rishaan's language translator app </h1>
         </header>
       <div>
         FROM: 
         <select>
           {options.map(opt => <option value={opt.code}> {opt.name} </option>)}
         </select>

           TO: 
         <select>
         {options.map(opt => <option value={opt.code}>{opt.name}</option>)}
      
           </select>
         </div>
         
         <div>
           <textarea cols="50" row="8"></textarea>
         </div>

         <div>
           <textarea cols="50" row="8"></textarea>
         </div>

         <div>
           <button className="submit-button">TRANSLATE </button>
         </div>
    
    </div>
  );
}

export default App;
