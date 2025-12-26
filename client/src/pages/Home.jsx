import { useState } from "react";
import { getCurrentWeather, getForecast } from "../api/weatherApi";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const weatherRes = await getCurrentWeather(city);
      const forecastRes = await getForecast(city);

      setWeather(weatherRes.data);
      setForecast(forecastRes.data.list.slice(0, 5));
    } catch {
      setError("City not found. Please try again.");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1>Weather Dashboard</h1>
      
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}
      
      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard data={weather} />}

      {forecast.length > 0 && (
        <div className="forecast-container">
          <h3>5-Day Forecast</h3>
          <div className="forecast-list">
            {forecast.map((item, index) => (
              <ForecastCard key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
