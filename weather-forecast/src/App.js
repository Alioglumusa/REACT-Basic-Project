import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import City from "./City";

function App() {
  const key = "ff22499f9213c89c536099011f67aa56";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search]);

  return (
    <div className="container">
      <div className="App">
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Placeholder"
            className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
          />
          {city && <City city={city} />}
        </div>
      </div>
    </div>
  );
}

export default App;
