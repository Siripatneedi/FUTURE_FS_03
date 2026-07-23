require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.get("/", (req, res) => {

    res.send("Restaurant API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});