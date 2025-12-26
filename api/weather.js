// Import Required Libraries
const axios = require("axios");

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { city } = req.query;
  const apiKey = process.env.API_KEY;

  if (!city) {
    return res.status(400).json({ message: "City parameter is required" });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: "City not found" });
  }
};
