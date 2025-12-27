import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { sparklineOptions } from "../../lib/chartUtils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface SparklineChartProps {
  data: number[];
  color?: string;
  height?: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  color = "#16c784",
  height = 40,
}) => {
  const chartData = {
    labels: data.map((_, index) => index.toString()),
    datasets: [
      {
        data: data,
        borderColor: color,
        backgroundColor: "transparent",
        fill: false,
      },
    ],
  };

  return (
    <div style={{ height: `${height}px`, width: "100%" }}>
      <Line data={chartData} options={sparklineOptions} />
    </div>
  );
};

export default SparklineChart;
