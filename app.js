const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Node.js Deployment Test Successful 🚀",
    timestamp: new Date(),
    hostname: require("os").hostname(),
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
  });
});

// Sample POST endpoint
app.post("/test", (req, res) => {
  res.json({
    receivedData: req.body,
    message: "POST request working ✅",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
