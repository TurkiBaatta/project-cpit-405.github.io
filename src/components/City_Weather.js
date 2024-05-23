//import "./App.css";
import React, { useState } from 'react';


const api = {
  key: "bd5f67e8a9bfc682d38d0c57e0f3419f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function City_Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const searchPressed = () => {
    if (search.trim() === "") {
      setError("Please enter the name of city!");
      return; // Prevents the API call if the search input is empty
    }
    // Use Seond Method which is ( The Fetch API )
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        setWeather(data);
        setError(""); // Clear any previous errors on successful fetch
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <div className='weather_card'>
        <h1>Weather App</h1>
        <div><br/>
          <input
            type="text"
            placeholder="Enter City Name..."
            onChange={(e) => setSearch(e.target.value)}
          /><br/><br/>
          <button className='btn' onClick={searchPressed}>Search</button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather.main && (
          <div><br/>
            <p>{weather.name}, {weather.sys?.country}</p><br/>
            <p>{weather.main.temp}°C</p><br/>
            <p>({weather.weather[0].description})</p><br/>
          </div>
        )}
    </div>
  );
}

export default City_Weather;