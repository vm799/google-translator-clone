import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
const axios = require("axios").default
function App() {

  const [to, setTo]= useState("")
  const [from, setFrom]= useState("")
  const [input, setInput]= useState("")
  const [output, setOutput]= useState("")

  useEffect(()=> {
    axios.get("https://libretranslate.com/languages",
    {headers:{"accept" : "application/json"}}).then(res=>{
      console.log(res)
    })
  })

  // curl -X GET "https://libretranslate.com/languages" -H  "accept: application/json"
  return (
    <div className="App">
      <header className="App-header">
        <h1> Rishaan's language translator app </h1>
         </header>
       <div>
         FROM: 
         <select>
           <option value="1">1</option>
           <option value="2">2</option>
           </select>

           TO: 
         <select>
           <option value="1">1</option>
           <option value="2">2</option>
           </select>
         </div>
         
         <div>
           <textarea cols="50" row="8"></textarea>
         </div>

         <div>
           <textarea cols="50" row="8"></textarea>
         </div>

         <div>
           <button classname="submit-button">TRANSLATE </button>
         </div>
    
    </div>
  );
}

export default App;
