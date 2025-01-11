import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MosChart = () => {
  const chartRef = useRef(null); // Reference to the canvas element
  const chartInstance = useRef(null); // Reference to the Chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "line", // or the type of chart you want
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        datasets: [
          {
            label: "Actual MOS",
            data: [4.1507, 3.8065, 2.4259, 1.0008, 2.4268, 3.4279, 0.6310, 3.0637, 2.0138, 4.7653], // Add your actual data here
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointStyle: "circle",
            pointRadius: 4,
            pointHoverRadius: 8,
            borderWidth: 2,
            tension: 0.4, // Curved line
          },
          {
            label: "Predicted MOS",
            data: [0, 4.2206, 4.0599, 2.9023, 1.1441, 2.6600, 2.9871, 0.3713, 3.1495, 1.8812, 4.9833], // Add your predicted data here
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            pointStyle: "triangle",
            pointRadius: 4,
            pointHoverRadius: 8,
            borderWidth: 2,
            tension: 0.4, // Curved line
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Time (Secs)",
              color: "white",
            },
            ticks: { color: "white" },
            grid: { color: "transparent" },
          },
          y: {
            title: {
              display: true,
              text: "MOS",
              color: "white",
            },
            ticks: { color: "white" },
            grid: { color: "transparent" },
            min: 1,
          },
        },
      },
    });

    // Cleanup when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="mos-graph">
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default MosChart;
