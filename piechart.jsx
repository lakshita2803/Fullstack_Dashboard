import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  if (!data || data.length === 0) return <p>No data</p>;

  const categories = [...new Set(data.map(s => s.category))];
  const totals = categories.map(cat =>
    data.filter(s => s.category === cat).reduce((sum, s) => sum + s.amount, 0)
  );

  return (
    <Pie
      data={{
        labels: categories,
        datasets: [
          {
            label: "Category Sales",
            data: totals,
            backgroundColor: ["#4b8bf4", "#f45b69", "#4caf50"]
          }
        ]
      }}
    />
  );
}