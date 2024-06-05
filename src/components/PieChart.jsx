import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels: ["Buenos Aires", "Cordoba", "Santa Fe", "Entre Rios", "Corrientes"],
    datasets: [
      {
        label: "Pedidos por Provincia",
        data: [35, 20, 20, 15, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 132, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
