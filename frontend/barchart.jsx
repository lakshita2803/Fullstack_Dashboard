import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
}  from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function BarChart({ data }) {
  if (!data || data.length === 0) return <p>No data</p>;

  const labels = data.map(item => new Date(item.date).toLocaleDateString());
  const values = data.map(item => item.amount);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        backgroundColor: "#4b8bf4"
      }
    ]
  };

  return <Bar data={chartData} />;
}