const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
    product: String,
    category: String,
    amount: Number,
    date: Date
});

module.exports = mongoose.model("Sales", SalesSchema);