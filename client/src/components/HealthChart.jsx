import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const HealthChart = ({ history }) => {
  if (!history.length) return null;

  const labels = history.map((r) => new Date(r.createdAt).toLocaleDateString());
  const bmiData = history.map((r) => r.bmi);
  const bpData = history.map((r) => r.bp);

  const data = {
    labels,
    datasets: [
      {
        label: "BMI",
        data: bmiData,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "BP",
        data: bpData,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-center">📊 Health Progress</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default HealthChart;
