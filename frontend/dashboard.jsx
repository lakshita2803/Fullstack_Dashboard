import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import { getSalesData } from "../api";
import AreaChart from "../charts/areachart";
import DoughnutChart from "../charts/doughnutchart";
import Navbar from "../components/navbar";

export default function Dashboard() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getSalesData()
      .then(res => {
        console.log("Sales API Response:", res.data);
        setSales(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h2 className="dashboard-title">Sales Overview</h2>

        <div className="chart-container">
          <AreaChart data={sales} />
        </div>

        <div className="chart-container">
          <DoughnutChart data={sales} />
        </div>
      </div>
    </>
  );
}