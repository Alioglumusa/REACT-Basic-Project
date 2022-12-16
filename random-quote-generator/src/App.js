import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote()
  },[])
  return (
    <div className="App">
     <div className="quote">
      <p className="quotes-text">{quotes.text}</p>
      <p className="author"><span>{quotes.author}</span></p>

      <div className="btn-container">
        <button onClick={getQuote} className="btn">Get Quote</button>
      </div>
     </div>
    </div>
  );
}

export default App;
