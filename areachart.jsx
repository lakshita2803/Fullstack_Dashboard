import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

export default function AreaChart({ data }) {
  if (!data || data.length === 0) return <p>No data</p>;

  const labels = data.map(s => new Date(s.date).toLocaleDateString());
  const values = data.map(s => s.amount);

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Area Chart",
            data: values,
            fill: true,
            borderWidth: 2
          }
        ]
      }}
    />
  );
}