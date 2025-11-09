const express = require("express");
const app = express();
const port = 3000;

// Middleware ตรวจสอบและแสดง Server Uptime
app.use((req, res, next) => {
  const uptime = process.uptime();
  console.log(`Server Uptime: ${uptime.toFixed(2)} seconds`);
  next();
});

// Endpoint: /api/status
app.get("/api/status", (req, res) => {
  res.json({
    server: "ATC Next Gen API",
    version: "1.0.0",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
