"use client";

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Pie } from "react-chartjs-2";


export const Pizza = () => {
    // Registrar módulos necessários do Chart.js
    ChartJS.register(ArcElement, Title, Tooltip, Legend);

    const data = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
        datasets: [
            {
                label: "Vendas",
                data: [12, 19, 3, 5],
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

    return (
        <div className="w-4/12 border-2 p-2 m-2">
            <Pie data={data} options={options} />
        </div>
    );
}