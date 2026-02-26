import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data }) {
  if (!data || data.length === 0) return <p>No data available</p>;

  const categories = [...new Set(data.map(s => s.category))];
  const totals = categories.map(cat =>
    data
      .filter(s => s.category === cat)
      .reduce((sum, s) => sum + s.amount, 0)
  );

  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        margin: "0 auto"
      }}
    >
      <Doughnut
        data={{
          labels: categories,
          datasets: [
            {
              label: "Category Share",
              data: totals,
              backgroundColor: ["#4b8bf4", "#f45b69", "#4caf50"],
              borderWidth: 1
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: { size: 12 } // NORMAL size
              }
            }
          }
        }}
      />
    </div>
  );
}