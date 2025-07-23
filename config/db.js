const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/base", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle successful connection
db.on("connected", () => {
  console.log("✅ MongoDB connected");
});

// Handle connection errors
db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Optional: Handle disconnected
db.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

module.exports = db;
