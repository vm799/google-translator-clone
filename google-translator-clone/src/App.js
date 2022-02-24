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

// const params = new URLSearchParams();
// params.append("q", input);
// params.append("source", from);
// params.append("target", to);
// params.append("api_key", to);

// fetch("https://libretranslate.com/translate", params)

const translate = () => {
  const res = fetch("https://libretranslate.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "Hello!",
      source: "en",
      target: "es",
      format: "text",
      api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }),
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then (res => console.log(res));
}


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
           <button onClick ={e => translate()} className="submit-button">TRANSLATE </button>
         </div>
    
    </div>
  );
}

export default App;
