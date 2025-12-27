import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { areaChartOptions } from "../../lib/chartUtils";
import { MONTH_LABELS } from "../../data/dashboardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface AreaChartProps {
  data: number[];
  label?: string;
  color?: string;
  labels?: string[];
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  label = "Emissions (kg CO2)",
  color = "#16c784",
  labels = MONTH_LABELS,
}) => {
  const chartRef = useRef<any>(null);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: color,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, color + "80"); // 50% opacity
          gradient.addColorStop(1, color + "00"); // 0% opacity
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#fff",
        pointBorderColor: color,
        pointBorderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line ref={chartRef} data={chartData} options={areaChartOptions} />
    </div>
  );
};

export default AreaChart;
