import React, {useState} from 'react';
import './App.css';

function App() {
  const [hex, setHex] = useState("#fff")

  function randomHex() {
    const randomHex = "#" + Math.floor(Math.random()*16777721 ).toString(16)
    setHex(randomHex)
  }
  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
      <h1>{hex}</h1>
      <button onClick={randomHex}>Click For New Background</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>Copy The Hex Value</button>
    </div>
  );
}

export default App;
