const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const server = app.listen(5000, () => {
  console.log("Test server running on port 5000");
});

// Keep the process running
setInterval(() => {}, 1000);
