const ForecastCard = ({ item }) => {
  return (
    <div className="forecast-card">
      <p className="date">{item.dt_txt}</p>
      <p className="temp">{item.main.temp}°C</p>
      <p className="description">{item.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
