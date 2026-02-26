const Sales = require("../models/sales");   // ✅ REQUIRED IMPORT

exports.getSales = async (req, res) => {
  try {
    const { start, end, category } = req.query;
    let filter = {};

    // Date filters
    if (start && !end) {
      filter.date = { $gte: new Date(start) };
    } else if (!start && end) {
      filter.date = { $lte: new Date(end) };
    } else if (start && end) {
      filter.date = { $gte: new Date(start), $lte: new Date(end) };
    }

    // Category filter
    if (category && category !== "All") {
      filter.category = category;
    }

    console.log("Final Filter:", filter);

    const sales = await Sales.find(filter);
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};