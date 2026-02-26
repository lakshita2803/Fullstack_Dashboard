const mongoose = require("mongoose");
require("dotenv").config();
const Sales = require("./models/sales");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected for seeding"))
  .catch(err => console.log(err));

async function seedData() {
  await Sales.deleteMany(); // clear old data

  const sample = [
    {
      date: new Date("2024-01-10"),
      category: "Electronics",
      amount: 1200
    },
    {
      date: new Date("2024-01-15"),
      category: "Clothing",
      amount: 500
    },
    {
      date: new Date("2024-01-20"),
      category: "Grocery",
      amount: 300
    },
    {
      date: new Date("2024-02-02"),
      category: "Electronics",
      amount: 900
    }
  ];

  await Sales.insertMany(sample);
  console.log("Sample sales data inserted!");
  process.exit();
}

seedData();