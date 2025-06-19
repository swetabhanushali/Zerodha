require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));

// ======== AUTH ROUTES ========
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await UserModel.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const user = new UserModel({ email, password });
    await user.save();

    res.json({ msg: "Signup successful" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({ msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// ======== EXISTING ROUTES BELOW ========

app.get("/addHoldings", async (req, res) => {
  // Your existing code...
});

app.get("/addPositions", async (req, res) => {
  // Your existing code...
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode, previousPrice } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    const avg = price;
    const netPercent = ((price - avg) / avg) * 100;
    const dayPercent = previousPrice
      ? ((price - previousPrice) / previousPrice) * 100
      : 0;

    const formattedNet = `${netPercent >= 0 ? "+" : ""}${netPercent.toFixed(2)}%`;
    const formattedDay = `${dayPercent >= 0 ? "+" : ""}${dayPercent.toFixed(2)}%`;

    const newHolding = new HoldingsModel({
      name,
      qty,
      avg,
      price,
      net: formattedNet,
      day: formattedDay,
      mode,
    });

    await newHolding.save();

    res.send("Order saved and holding calculated!");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Failed to save order.");
  }
});

app.listen(PORT, () => {
  console.log("App started on port", PORT);
  mongoose.connect(uri).then(() => console.log("MongoDB connected"));
});
