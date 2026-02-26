require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const salesRoutes = require("./routes/salesroute");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect using ENV
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/api/sales", salesRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));