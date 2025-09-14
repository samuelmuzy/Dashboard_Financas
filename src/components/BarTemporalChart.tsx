"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrar módulos necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  datasets: [
    {
      label: "Vendas",
      data: [12, 19, 3, 5,4,5,6,7,8,4,2,7],
      backgroundColor: "rgba(75, 192, 192, 0.6)"
    },
    {
      label: "Vendas",
      data: [12, 19, 3, 5,4,5,6,7,8,4,2,7],
      backgroundColor: "rgba(75, 192, 192, 0.6)"
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Gráfico de Vendas" }
  }
};

export default function BarTemporalChart() {
  return (
    <div className="w-9/12 border-2 rounded-2xl border-cyan-700">
      <Bar data={data} options={options} />
    </div>
  );
}