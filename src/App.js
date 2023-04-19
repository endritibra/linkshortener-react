import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [shortener,setShortener]=useState("")

  function handleInput(ev) {
    setInput(ev.target.value);
  }

  
    const work = async (e) => {
      e.preventDefault()
      console.log(input)
      let longUrl = `https://www.${input}`;
      console.log(longUrl)
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`, {
        method: 'POST'
    
      })
      const data = await response.json();

     let short=data.result.short_link
     setShortener(short)
     
      };
  



  console.log(input)
  return (
    <div className="App ">
      <h1 className="text-blue-400 flex justify-center items-center bg-black p-4 text-3xl mx-auto">
        Url Shortener
      </h1>

      <div className="forma flex flex-col justify-center items-center p-3 mt-4">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={work}
        >
          <label>Enter a link to shorten: {input} </label>
          <input
            type="text"
            value={input}
            className="border-2 border-indigo-500 w-[300px]"
            onChange={handleInput}
          />
          <input
            type="submit"
            className="cursor-pointer bg-green-400 w-[120px] mx-auto mt-2 text-white rounded-sm"
         
          />
 
        
        </form>

      </div>
      <a href={`//${shortener}`}> <h2 className="bg-blue-400 w-full p-10 text-black text-4xl font-bold flex justify-center items-center">{shortener}</h2></a>

    </div>
  );
}

export default App;
