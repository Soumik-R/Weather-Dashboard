const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p className="temperature">Temperature: {data.main.temp}°C</p>
      <p className="condition">Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
